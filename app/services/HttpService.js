import Configuration from "../config/Configuration";

class HttpService {
    
    token;

    fetch(requestOptions) {

        return new Promise((resolve, reject) => {

            const {sendToken} = requestOptions;
            const url = this.configureUrl(requestOptions);
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
                .then(res => res.json()) // convert text response to json object
                .then(res => {
                    resolve(res);
                })
                .catch((err) => {
                    // handle error conditions here...
                    reject({
                        status : "error"
                    });
                });
        });
    }

    xmlHttpRequest(options) {

        return new Promise(function (resolve, reject) {
            
            let xhr = new XMLHttpRequest();
            xhr.timeout = Configuration.HTTP_TIMEOUT_MS;
            xhr.open(options.method, options.url);

            xhr.addEventListener("timeout", function(e) {
                reject("timeout");
            });

            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr);
                } else {
                    reject(xhr);
                }
            };

            xhr.onerror = function () {
                reject(xhr);
            };

            if (options.headers) {
                Object.keys(options.headers).forEach(function (key) {
                    xhr.setRequestHeader(key, options.headers[key]);
                });
            }

            if (options.params) {
                xhr.send(options.params);
            } else {
                xhr.send();
            }
        });        
    }

    configureUrl(requestOptions) {
        let url = requestOptions.apiPath || Configuration.API_URL;
        url = requestOptions.path ? (url + requestOptions.path) : url;
        return url;
    }

    setToken(token) {
        this.token = token;
    }
}

export default new HttpService();