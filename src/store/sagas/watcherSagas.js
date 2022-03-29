import { all, takeLatest } from "redux-saga/effects";

// uncomment when actions grow largee
// import * as action from "../reducers/actionLabels/reducerActionLabels";

import {
  forgotPasswordSaga,
  googleLoginSaga,
  loginSaga,
  passwordResetSaga,
  registerSaga,
  verifyOtpSaga,
} from "./auth/auth";
import { ratesSaga } from "./upperStripRate/rate";
import { getTransactionsSaga } from "./transactions/transactionSaga";
import { getDashboardSaga } from "./dashboard/dashboardSaga";

// tmep
// console.log(action.getRatesSaga.type);
// console.log(action.loginSaga.type);

export function* watchDashboard() {
  yield all([takeLatest("userDashboard/getDashboardSaga", getDashboardSaga)]);
}

export function* watchAuthentication() {
  yield all([takeLatest("auth/loginSaga", loginSaga)]);
  yield all([takeLatest("auth/googleLoginSaga", googleLoginSaga)]);
  yield all([takeLatest("auth/registerSaga", registerSaga)]);
  yield all([takeLatest("auth/forgotPasswordSaga", forgotPasswordSaga)]);
  yield all([takeLatest("auth/verifyOtpSaga", verifyOtpSaga)]);
  yield all([takeLatest("auth/passwordResetSaga", passwordResetSaga)]);
}
export function* watchRates() {
  yield all([takeLatest("upperStripRates/getRatesSaga", ratesSaga)]);
}
export function* watchTransactions() {
  yield all([
    takeLatest("transactions/getTransactionsSaga", getTransactionsSaga),
  ]);
}
