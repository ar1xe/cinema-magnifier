import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetMovieInterface, Movies } from "../../pages/startPage/StartPage";

interface SearchMoviesState {
  searchMovies: Movies[];
  moviesLoading: boolean;
}

const initialState: SearchMoviesState = {
  searchMovies: [],
  moviesLoading: false,
};

const searchMovieSlice = createSlice({
  name: "searchMovies",
  initialState,
  reducers: {
    fetchSearchMoviesBegin: (state, action: PayloadAction<boolean>) => ({
      ...state,
      moviesLoading: action.payload,
    }),
    fetchMovieSearchSuccess: (
      state,
      action: PayloadAction<GetMovieInterface>
    ) => {
      console.log(action.payload.results);
      return {
        ...state,
        searchMovies: action.payload.results,
      };
    },
  },
});

export const { fetchSearchMoviesBegin, fetchMovieSearchSuccess } =
  searchMovieSlice.actions;
export default searchMovieSlice.reducer;
