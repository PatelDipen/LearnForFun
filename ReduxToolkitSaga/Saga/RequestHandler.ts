import { call, put } from "redux-saga/effects";
import { incrementAsyncRQ, decrementAsyncRQ } from "./Request";
import { incrementDone, decrementDone } from '../ReduxToolkit/RTSCounterSlice';

export function* incrementAsyncWithSaga(action: { payload: number; }) {
    try {
        const result:number = yield call(incrementAsyncRQ, action.payload);
        console.log('result', result);
        yield put(incrementDone({countToIncrease:result}));
    } catch (e) {
        yield put(incrementDone({countToIncrease:0}));
    }
}

export function* decrymentAsyncWithSaga(action: { payload: { decrementCount: number; }; }) {
    try {
        const result:number = yield call(decrementAsyncRQ, action.payload.decrementCount);
        yield put(decrementDone({countToDecrease:result}));
    } catch (e) {
        yield put(decrementDone({countToDecrease:0}));
    }
}