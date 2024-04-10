import { put, takeEvery, call } from "redux-saga/effects";
import { increment } from "@/lib/redux/features/counter/slice";
import { delay } from "@/utils";

export const incrementAsyncRequest = "counter/incrementAsyncRequest";

export function* incrementAsync() {
  try {
    yield call(delay, 1000); // Simulate async operation
    // Dispatch an action to update the state upon start
    yield put(increment());
  } catch {
    console.log("error happend incrementAsync");
  }
}

export function* watchIncrementAsync() {
  yield takeEvery(incrementAsyncRequest, incrementAsync);
}
