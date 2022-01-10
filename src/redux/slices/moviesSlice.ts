import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetMovieInterface, Movies } from "../../pages/startPage/StartPage";

interface MoviesState {
  movies: Movies[];
  moviesLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  moviesLoading: false,
  error: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesBegin: (state, action: PayloadAction<boolean>) => ({
      ...state,
      moviesLoading: action.payload,
    }),
    fetchMoviesSuccess: (state, action: PayloadAction<GetMovieInterface>) => ({
      ...state,
      movies:
        action.payload.page === 1
          ? action.payload.results
          : state.movies.concat(action.payload.results),
    }),
    fetchMoviesEnd: (state) => ({
      ...state,
      moviesLoading: false,
    }),
    fetchMoviesFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export const {
  fetchMoviesBegin,
  fetchMoviesSuccess,
  fetchMoviesEnd,
  fetchMoviesFailure,
} = moviesSlice.actions;
export default moviesSlice.reducer;
