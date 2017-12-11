import { AsyncStorage } from "react-native";

class InstaNativeApi {
    
    httpService;

    setHttpService = (httpService) => {
        this.httpService = httpService;
        return this;
    }

    setToken = (token) => {
        if (this.httpService) {
            this.httpService.setToken(token);
        }
        return this;
    }

    doLogin = (email, password) => {

        return this.httpService.fetch({
            path : "/auth/login",
            method: "POST",
            body : {email, password},
            sendToken : false
        });
    }

    fetchRecentMedia = () => {

        return this.httpService.fetch({
            path : "/media/recent",
            method: "GET",
            sendToken : false
        });       
    }

    fetchMyRecentPhotos = () => {

        return this.httpService.fetch({
            path : "/media/my/recent",
            method: "GET",
            sendToken : true
        });        
    }

    fetchProfile = () => {

        return this.httpService.fetch({
            path : "/profile",
            method: "GET",
            sendToken : true
        });         
    }

    saveProfile = (profile) => {

        return this.httpService.fetch({
            path : "/profile",
            method: "PUT",
            sendToken : true,
            body : profile
        });       
    }

    readAuthInfo = () => {
        return new Promise((resolve, reject) => {
            
            AsyncStorage.getItem("AUTH_INFO", (err, authInfoStr) => {
                if (authInfoStr) {
                    let authInfo = JSON.parse(authInfoStr);
                    resolve(authInfo);
                }else {
                    resolve(null);
                }
            });
        }); 
    }

    saveAuthInfo = (user, sessionToken) => {
        try {
            AsyncStorage.setItem("AUTH_INFO", JSON.stringify({
                user,
                sessionToken
            }));
        } catch(e) {
            console.log("saveAuthInfo e ->", e);
        }
    }

    clearAuthInfo = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.removeItem("AUTH_INFO");
            resolve();
        });
    }
}
     
export default new InstaNativeApi();