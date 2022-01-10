import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchMoviesBegin,
  fetchMoviesSuccess,
  fetchMoviesEnd,
  fetchMoviesFailure,
} from "../../slices/moviesSlice";
import StartPageServices from "../../../services/StartPageServices";
import { GetMovieInterface } from "../../../pages/startPage/StartPage";
import { fetchMovies } from "../actions/movieActions";

export function* fetchMoviesWorker(action: ReturnType<typeof fetchMovies>) {
  try {
    yield put(fetchMoviesBegin(true));
    const currentMovie: GetMovieInterface = yield call(
      StartPageServices.getMovies,
      action.payload
    );

    yield put(
      fetchMoviesSuccess({
        results: currentMovie.results,
        page: action.payload,
      })
    );
  } catch (error) {
    yield put(fetchMoviesFailure(error as string));
  } finally {
    yield put(fetchMoviesEnd());
  }
}

export const moviesWatcher = [takeEvery(fetchMovies.type, fetchMoviesWorker)];
