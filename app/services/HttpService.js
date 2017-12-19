import Configuration from "../config/Configuration";

class HttpService {
    
    token;

    fetch(requestOptions) {

        return new Promise((resolve, reject) => {

            const {sendToken} = requestOptions;
            const url = this._createUrl(requestOptions);
            const overriddenHeaders = requestOptions.headers || {};            

            const processedRequestOptions = {
                ...requestOptions,
                body : JSON.stringify(requestOptions.body),
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : (typeof sendToken === "undefined" ? this.token : (sendToken === false ? null : this.token)),
                    ...overriddenHeaders
                },
                timeout: Configuration.HTTP_TIMEOUT_MS
            };
            
            fetch(url, processedRequestOptions)
                .then(res => res.json()) // gelen response text'ini json nesnesine dönüştürürüz.
                .then(res => {
                    resolve(res);
                })
                .catch((err) => {
                    reject({
                        status : "error"
                    });
                });
        });
    }

    _createUrl(requestOptions) {
        let url = requestOptions.apiPath || Configuration.API_URL;
        url = requestOptions.path ? (url + requestOptions.path) : url;
        return url;
    }

    setToken(token) {
        this.token = token;
    }
}

export default new HttpService();