import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// reducer'ları import ediyoruz.
import authReducer from "./auth/Reducer";
import globalReducer from "./global/Reducer";
import mediaReducer from "./media/Reducer";

// saga tanımlarını import ediyoruz.
import instaSaga from "./sagas/instaSaga";

// reducerları tek ağaç altında topluyoruz
const reducers = combineReducers({
    auth : authReducer,
    global : globalReducer,
    media : mediaReducer
});

// saga middleware alt yapısını yaratıyoruz.
const sagaMiddleware = createSagaMiddleware();

// reducer ve middleware'lerimizi kullanarak bir store
// yaratıyoruz.
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

// ek adım olarak saga middleware sisteminin
// çalışmasını başlatıyoruz.
// bu redux-saga'ya özel bir adım
sagaMiddleware.run(instaSaga)

// yarattığımız store modülünü
// export ediyoruz.
// store global olarak 1 tane oluyor bu şekilde.
export default store;