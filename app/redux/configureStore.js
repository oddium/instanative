import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// reducers..
import authReducer from "./auth/Reducer";
import globalReducer from "./global/Reducer";
import mediaReducer from "./media/Reducer";

import instaSaga from "./sagas/instaSaga";

const reducers = combineReducers({
    auth : authReducer,
    global : globalReducer,
    media : mediaReducer
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(instaSaga)

export default store;