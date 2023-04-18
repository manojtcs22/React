import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import createSagaMiddleware from 'redux-saga'
import { helloWorld } from "../sagas/helloWorld";
import { greeting } from "../sagas/greeting";
import { rootSaga } from "../sagas";


const sagaMiddleware = createSagaMiddleware();
const configStore = (initial) => {
    let store = createStore(rootReducer,initial,applyMiddleware(thunk,sagaMiddleware));
    //sagaMiddleware.run(helloWorld);
    //sagaMiddleware.run(greeting);
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configStore;