import { takeEvery, all, put } from "redux-saga/effects";
const axios = require("axios").default;

function* saveCase(action) {
  console.log("In saga!", action.payload);
  let profile = action.payload;
  profile["income"] = [1];
  const response = yield axios.post(
    "http://localhost:8080/Profiles",
    action.payload
  );

  console.log("Resonse", response.data);

  const prediction = parseFloat(response.data[0][0]);
  let output = ">50,000k";
  if (prediction < 0.8) {
    output = "<=50,000k";
  }

  let result = action.payload;
  result["prediction"] = [output];

  delete result["income"];
  yield put({ type: "ADD_PROFILE", payload: result });
}

function* watchApplication() {
  yield takeEvery("SAVE_CASE", saveCase);
}

export default function* rootSaga() {
  yield all([watchApplication()]);
}
