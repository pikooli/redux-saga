import { put, takeEvery, call } from "redux-saga/effects";
import { increment } from "@/lib/redux/features/counter/slice";
import { delay } from "@/utils";

export const incrementAsyncStart = "counter/incrementAsyncStart";
export const incrementAsyncRequest = "counter/incrementAsyncRequest";
export const incrementAsyncSuccess = "counter/incrementAsyncSuccess";
export const incrementAsyncFailure = "counter/incrementAsyncFailure";

export function* incrementAsync() {
  try {
    yield put({ type: incrementAsyncStart });
    yield call(delay, 1000); // Simulate async operation
    // Dispatch an action to update the state upon start
    yield put(increment());
    // Dispatch an action to update the state upon success
    yield put({ type: incrementAsyncSuccess });
  } catch {
    // Dispatch an action to update the state upon failure
    yield put({ type: incrementAsyncFailure });
  }
}

export function* watchIncrementAsync() {
  yield takeEvery(incrementAsyncRequest, incrementAsync);
}
