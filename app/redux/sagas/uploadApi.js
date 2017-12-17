import Upload from 'react-native-background-upload';
import EventEmitter from "event-emitter-es6";
import Configuration from "../../config/Configuration";

class UploadApi {

    apiToken;

    setToken = (token) => {
        this.apiToken = token;
    }

    uploadImage = (imageUri) => {

        let isIOS = Configuration.PLATFORM_IOS;
        // IOS and Android provides different file paths so we need to preprocess
        // file paths before using.
        let updatedImageUri = isIOS ? "file://" + imageUri : imageUri.replace("file:///", "/");

        const options = {
            url: Configuration.API_URL + "/upload/" + this.apiToken,
            path: updatedImageUri,
            method: 'POST',
            field: 'image/jpeg',
            type: 'multipart',
            // Below are options only supported on Android
            notification: {
                enabled: false
            }
        };

        return new Promise((resolve, reject) => {

            Upload.startUpload(options)
                .then((uploadId) => {
                    resolve(this.createNativeEventSender(uploadId));
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    createNativeEventSender = (uploadId) => {

        let nativeEventSender = new EventEmitter();
        let listeners = {
            refs : [],
            nativeEventSender
        };

        ['progress', 'error', 'completed'].forEach((eventName) => {
            listeners.refs.push(Upload.addListener(eventName, uploadId, (data) => nativeEventSender.emit(eventName, data)));
        });

        return listeners;
    }
}

export default new UploadApi();