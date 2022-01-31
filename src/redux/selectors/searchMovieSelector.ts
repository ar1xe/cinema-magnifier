import { RootState } from "../store";
import { Movies } from "../../pages/startPage/StartPage";

export const getMovieSearch = (state: RootState): Movies[] =>
  state.searchMoviesState.searchMovies;
