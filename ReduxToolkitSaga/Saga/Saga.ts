import { takeEvery } from 'redux-saga/effects'
import { decrymentAsyncWithSaga, incrementAsyncWithSaga } from './RequestHandler';
import { decrementAsync, incrementAsync } from '../ReduxToolkit/RTSCounterSlice';

export default function* watcherSaga() {
  yield takeEvery(incrementAsync, incrementAsyncWithSaga);
  yield takeEvery(decrementAsync, decrymentAsyncWithSaga);

}