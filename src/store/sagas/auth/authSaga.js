import { put, call } from "redux-saga/effects";
import axios from "../../../http/axios/axios_main";
import { catchHandler } from "../helperSaga";

import {
  loginStart,
  loginSuccess,
  loginFail,
  registerStart,
  registerSuccess,
  registerFail,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFail,
  verifyOtpStart,
  verifyOtpSuccess,
  verifyOtpFail,
  passwordResetStart,
  passwordResetSuccess,
  passwordResetFail,
} from "../../reducers/authReducer";

function* setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function* loginSaga(action) {
  yield put(loginStart());
  try {
    const { formData, redirectToDashboardAfterLogin } = action.payload;
    const response = yield axios.post(`/users/login`, formData);
    if (response.status === 200) {
      yield call(
        setItemToLocalStorage,
        "authToken",
        response.data.data.loginObj.token
      );
      yield call(
        setItemToLocalStorage,
        "userRole",
        response.data.data.loginObj.user_role
      );
      yield call(
        setItemToLocalStorage,
        "userData",
        JSON.stringify(response.data.data.loginObj)
      );
      yield call(
        setItemToLocalStorage,
        "kycStatus",
        JSON.stringify(response.data.data.kycstatus)
      );
      yield put(loginSuccess(response.data.data));
      // yield put(redirectToDashboardAfterLogin("/dashboard"));
      window.location.pathname = "/dashboard";
    } else {
      yield put(loginFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, loginFail);
  }
}
export function* registerSaga(action) {
  yield put(registerStart());
  try {
    const response = yield axios.post(`/users/signup`, action.payload);
    console.log(response);
    if (response.status === 200) {
      console.log(response.data.data);
      yield call(
        [localStorage, "setItem"],
        "authToken",
        response.data.data.loginObj.token
      );
      yield call(
        [localStorage, "setItem"],
        "userRole",
        response.data.data.loginObj.user_role
      );
      yield call(
        [localStorage, "setItem"],
        "userData",
        JSON.stringify(response.data.data.loginObj)
      );
      yield call(
        setItemToLocalStorage,
        "kycStatus",
        JSON.stringify(response.data.data.kycstatus)
      );
      yield put(registerSuccess(response.data.data));
      window.location.pathname = "/dashboard";
    } else {
      yield put(registerFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, registerFail);
  }
}

export function* googleLoginSaga(action) {
  yield put(loginStart());
  try {
    console.log(action.payload);
    const response = yield axios.post(`/users/login-google`, action.payload);
    if (response.status === 200) {
      yield call(
        setItemToLocalStorage,
        "authToken",
        response.data.data.loginObj.token
      );
      yield call(
        setItemToLocalStorage,
        "userRole",
        response.data.data.loginObj.user_role
      );
      yield call(
        setItemToLocalStorage,
        "userData",
        JSON.stringify(response.data.data.loginObj)
      );
      yield call(
        setItemToLocalStorage,
        "kycStatus",
        JSON.stringify(response.data.data.kycstatus)
      );
      yield put(loginSuccess(response.data.data));
      window.location.pathname = "/dashboard";
    } else {
      yield put(loginFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, loginFail);
  }
}

export function* forgotPasswordSaga(action) {
  yield put(forgotPasswordStart());
  const { email, stopSpinner } = action.payload;
  try {
    const response = yield axios.post(`/users/forgot-password`, { email });
    if (response.status === 200) {
      yield put(forgotPasswordSuccess(response.data.data));
      stopSpinner();
    } else {
      stopSpinner();
      yield put(forgotPasswordFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    stopSpinner();
    yield call(catchHandler, error, forgotPasswordFail);
  }
}

export function* verifyOtpSaga(action) {
  yield put(verifyOtpStart());
  const { email, stopSpinner, otp } = action.payload;
  try {
    const response = yield axios.post(`/users/verify-otp`, { email, otp });
    if (response.status === 200) {
      yield put(verifyOtpSuccess(response.data.data));
      stopSpinner();
    } else {
      stopSpinner();
      yield put(verifyOtpFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    stopSpinner();
    yield call(catchHandler, error, verifyOtpFail);
  }
}

export function* passwordResetSaga(action) {
  yield put(passwordResetStart());
  const { email, stopSpinner, password } = action.payload;
  try {
    const response = yield axios.post(`/users/reset-password`, {
      email,
      password,
    });
    if (response.status === 200) {
      yield put(passwordResetSuccess(response.data.data));
      stopSpinner();
    } else {
      stopSpinner();
      yield put(passwordResetFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    stopSpinner();
    yield call(catchHandler, error, passwordResetFail);
  }
}
