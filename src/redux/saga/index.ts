import { peopleWatcher } from "./peopleSaga";
import { moviesWatcher } from "./movieSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...peopleWatcher, ...moviesWatcher]);
}
