import { takeEvery, all } from "redux-saga/effects";

function* saveCase(action) {
  console.log("In saga!", action.payload);
}

function* watchApplication() {
  yield takeEvery("SAVE_CASE", saveCase);
}

export default function* rootSaga() {
  yield all([watchApplication()]);
}
