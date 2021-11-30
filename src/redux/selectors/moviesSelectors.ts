import { RootState } from "../store";
import { Movies } from "../../pages/startPage/StartPage";

export const getMovies = (state: RootState): Movies[] => state.moviesState.movies;
