import { takeEvery, all } from "redux-saga/effects";
const axios = require("axios").default;

function* saveCase(action) {
  console.log("In saga!", action.payload);
  const response = axios.post("http://localhost:8080/Claims", action.payload);
}

function* watchApplication() {
  yield takeEvery("SAVE_CASE", saveCase);
}

export default function* rootSaga() {
  yield all([watchApplication()]);
}
