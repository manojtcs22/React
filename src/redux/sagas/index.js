import {all} from "redux-saga/effects";
import { greeting } from "./greeting";
import { helloWorld } from "./helloWorld";
import { productsWatcherSaga } from "./productsSaga";

export function* rootSaga() {
    yield all([
       // helloWorld(),
       // greeting()
       productsWatcherSaga()
    ])
}