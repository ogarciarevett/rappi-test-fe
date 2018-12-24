import { takeLatest, all, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import { BASE_URL } from "../constants";

function* getProducts({ value }) {
  try {
    yield put({ type: "FETCH_PRODUCTS_PENDING" });
    const response = yield axios.get(`${BASE_URL}/products?q=${value}`);
    yield put({ type: "FETCH_PRODUCTS_SUCCESS", products: response.data });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_ERROR", error });
  }
}

function* goRouteSaga({ route }) {
  yield put(push(route));
}

function* getCatergories() {
  try {
    yield put({ type: "FETCH_CATEGORIES_PENDING" });
    const response = yield axios.get(`${BASE_URL}/categories`);
    yield put({ type: "FETCH_CATEGORIES_SUCCESS", categories: response.data });
  } catch (error) {
    yield put({ type: "FETCH_CATEGORIES_ERROR", error });
  }
}

export default function* saga() {
  yield all([
    yield takeLatest("FETCH_CATEGORIES", getCatergories),
    yield takeLatest("FETCH_PRODUCTS", getProducts),
    yield takeLatest("GO_TO_ROUTE", goRouteSaga),
  ]);
}
