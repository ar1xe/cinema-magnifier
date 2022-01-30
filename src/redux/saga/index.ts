import { peopleWatcher } from "./sagas/peopleSaga";
import { moviesWatcher } from "./sagas/movieSaga";
import { all } from "redux-saga/effects";
import { peopleSearchWatcher } from "./sagas/searchPeopleSaga";

export default function* rootSaga() {
  yield all([...peopleWatcher, ...moviesWatcher, ...peopleSearchWatcher]);
}
