import { all } from "redux-saga/effects";

import home from "components/Home/store/sagas";

export default function* rootSaga() {
  return yield all([home]);
}
