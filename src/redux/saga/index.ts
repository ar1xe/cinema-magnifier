import { peopleWatcher } from "./sagas/peopleSaga";
import { moviesWatcher } from "./sagas/movieSaga";
import { all } from "redux-saga/effects";
import { peopleSearchWatcher } from "./sagas/searchPeopleSaga";
import { movieSearchWatcher } from "./sagas/searchMovieSaga";

export default function* rootSaga() {
  yield all([
    ...peopleWatcher,
    ...moviesWatcher,
    ...peopleSearchWatcher,
    ...movieSearchWatcher,
  ]);
}
