import { getData } from "../../apis/api";
import { FETCH_PRODUCTS } from "../action/actionTypes";
import { fetchProductsError, fetchProductsSuccess } from "../action/productActions";
import { put, takeEvery, call, takeLatest, cancelled } from 'redux-saga/effects'
import axios from "axios";


//Worker Saga
export function* productsWorkerSaga () {
    console.log("Products worker Saga")
    const source = axios.CancelToken.source();
    try {
        let response = yield call(getData,"products1", {cancelToken: source.token});

        yield put(fetchProductsSuccess(response.data))

    } catch (error) {
        yield put(fetchProductsError(error.message))
    } finally {
       if(yield cancelled()) {
        console.log("cancelled")
        source.cancel("API Cancelled")
       }
    }
}

//Watcher Saga
export function* productsWatcherSaga() {
    console.log("Products watcher saga");
   // yield takeEvery(FETCH_PRODUCTS,productsWorkerSaga) // Thunk
    yield takeLatest(FETCH_PRODUCTS,productsWorkerSaga) // take latest response
}
