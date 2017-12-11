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
                emit({type : DO_UPLOAD_REQUEST_COMPLETED}); 
                emit(END); 
            }, 1000);

        });

        // the subscriber must return an unsubscribe function
        // this will be invoked when the saga calls `channel.close` method
        const unsubscribe = () => {
            console.log("subscribeToNativeEvents unsubscribe");
            // REMOVE NATIVE LISTENERS
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
        const listeners = yield call(uploadApi.uploadImge, payload);
        const task = yield fork(nativeEventLister, listeners);
        yield take(DO_UPLOAD_REQUEST_COMPLETED);
        yield cancel(task);
    }
}

export default uploadSaga;