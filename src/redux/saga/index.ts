import { peopleWatcher } from "./sagas/peopleSaga";
import { moviesWatcher } from "./sagas/movieSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...peopleWatcher, ...moviesWatcher]);
}
