import { eventChannel, END } from "redux-saga";
import { fork, call, put, takeEvery, takeLatest, take, cancel } from 'redux-saga/effects'
import instaApi from "./configureApi";
import uploadApi from "./uploadApi";

import {
    DO_UPLOAD_REQUEST,
    DO_UPLOAD_REQUEST_COMPLETED,
    UPLOAD_PROGRESS_CHANGED,
    doUpload
} from "../media/Actions";

function subscribeToNativeEvents(listeners) {

    const {nativeEventSender} = listeners;

    // eventChannel metodu saga sistemine dışarıdan bir event
    // göndermemize yardımcı bir kanal yaratıyor. Bu sayede saga
    // sistemi içinde yer almayan upload progress event'lerini
    // saga sistemi içine gönderebiliyoruz.
    return eventChannel(emit => {

        nativeEventSender.on('progress', (data) => {
            setTimeout(() => {
                emit({type : UPLOAD_PROGRESS_CHANGED, payload : data});
            }, 100);
        });

        nativeEventSender.on('error', (data) => {
            emit({type : DO_UPLOAD_REQUEST_COMPLETED});
        });

        nativeEventSender.on('completed', (data) => {
            setTimeout(() => {
                // upload progress 100'e manuel olarak set ederiz
                // böylece upload kütüphanesi tarafından gelebilecek
                // hatalı yüzde değerini es geçmiş oluruz.
                emit({type : UPLOAD_PROGRESS_CHANGED, payload : {progress : 100}});

                setTimeout(() => {
                    emit({type : DO_UPLOAD_REQUEST_COMPLETED}); 
                    // END özel bir action oluşturulan kanalın durmasını sağlıyor.
                    // bu action'u saga sistemi dinliyor ve bu kanalı sisteminden kaldırıyor.
                    emit(END); 
                }, 1000);
            }, 1000);
            
        });

        // unsubscribe metodu saga sistemi bu kanalı kapatırken çağrılıyor ve tamamen
        // kapatılmadan bize son işlemleri yapmamızı sağlıyor.
        const unsubscribe = () => {
            // upload komponentine eklediğimiz listener'ları
            // kaldırırız bu noktada.
            listeners.refs.forEach((ref) => {
                ref.remove();
            });            
        }
  
        return unsubscribe;
    });
}

const nativeEventLister = function*(listeners) {

    const channel = yield call(subscribeToNativeEvents, listeners);
     
    while (true) {
        let action = yield take(channel);
        yield put(action);
    }
}

const uploadSaga = function*() {
    while (true) {
        const {payload} = yield take(DO_UPLOAD_REQUEST);
        const listeners = yield call(uploadApi.uploadImage, payload);
        const task = yield fork(nativeEventLister, listeners);
        yield take(DO_UPLOAD_REQUEST_COMPLETED);
        yield put({type : DO_UPLOAD_REQUEST_COMPLETED});
        yield cancel(task);
    }
}

export default uploadSaga;