import { call, put, takeEvery } from "redux-saga/effects";
import { fetchSearchMoviesBegin } from "../../slices/searchMovieSlice";
import { fetchMoviesSuccess } from "../../slices/moviesSlice";
import { GetMovieInterface } from "../../../pages/startPage/StartPage";
import { fetchSearchMovies } from "../actions/searchMoviesAction";
import SearchServices from "../../../services/SearchServices";

export function* fetchSearchMoviesWorker(
  action: ReturnType<typeof fetchSearchMovies>
) {
  try {
    yield put(fetchSearchMoviesBegin(true));
    const currentSearchMovie: GetMovieInterface = yield call(
      SearchServices.getMoviesSearch,
      action.payload.page,
      action.payload.query
    );
    yield put(
      fetchMoviesSuccess({
        results: currentSearchMovie.results,
        page: action.payload.page,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export const movieSearchWatcher = [
  takeEvery(fetchSearchMovies.type, fetchSearchMoviesWorker),
];
