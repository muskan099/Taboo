import { put, call } from "redux-saga/effects";
import axios from "../../../http/axios/axios_main";
import { catchHandler } from "../helperSaga";

import {
  getNftStart,
  getNftSuccess,
  getNftFail,
  createNftStart,
  createNftSuccess,
  createNftFail
} from "../../reducers/nftReducer";

export function* getNftSaga(action) {
  yield put(getNftStart());
  try {
    const response = yield axios.post(`/explore-content`, action.payload);
    if (response.status === 200) {
      yield put(getNftSuccess(response.data.data));
    } else {
      yield put(getNftFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, getNftFail);
  }
}


export function* createNftSaga(action) {
    yield put(createNftStart());
    try {
      const response = yield axios.post(`/create-content`, action.payload);
      if (response.status === 200) {
        yield put(createNftSuccess(response.data.data));
      } else {
        yield put(createNftFail("Something went wrong! Please try again."));
      }
    } catch (error) {
      yield call(catchHandler, error, createNftFail);
    }
  }
  
