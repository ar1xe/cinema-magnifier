import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "../../pages/startPage/StartPage";

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
    fetchMoviesSuccess: (state, action: PayloadAction<Movies[]>) => ({
      ...state,
      movies: state.movies.concat(action.payload),
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
