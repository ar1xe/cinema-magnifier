import { call, takeEvery, put } from "redux-saga/effects";
import {
  fetchMoviesBegin,
  fetchMoviesEnd,
  fetchMoviesFailure,
  fetchMoviesSuccess,
} from "../slices/moviesSlice";
import StartPageServices from "../../services/StartPageServices";
import { GetMovieInterface } from "../../pages/startPage/StartPage";
import { fetchMovies } from "./actions/movieActions";


export function* fetchMoviesWorker(page: any) {
  console.log(page);
  try {
    yield put(fetchMoviesBegin(true));
    const currentMovie: GetMovieInterface = yield call(
      StartPageServices.getMovies,
      page
    );

    yield put(fetchMoviesSuccess(currentMovie.results));
  } catch (error) {
    yield put(fetchMoviesFailure(error as string));
  } finally {
    yield put(fetchMoviesEnd());
  }
}

export const moviesWatcher = [takeEvery(fetchMovies.type, fetchMoviesWorker)];
