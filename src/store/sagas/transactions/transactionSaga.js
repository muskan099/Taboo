import { put, call } from "redux-saga/effects";
import axios from "../../../http/axios/axios_main";
import { catchHandler } from "../helperSaga";

import {
  getTransactionsStart,
  getTransactionsSuccess,
  getTransactionsFail,
} from "../../reducers/transactionReducer";

export function* getTransactionsSaga(action) {
  yield put(getTransactionsStart());
  try {
    const response = yield axios.post(`/users/Transactions`, action.payload);
    if (response.status === 200) {
      yield put(getTransactionsSuccess(response.data.data));
    } else {
      yield put(getTransactionsFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, getTransactionsFail);
  }
}
