import { createAction } from "@reduxjs/toolkit";
import { Movies } from "../../../pages/startPage/StartPage";

export const fetchMovies = createAction<number>("fetchMovies");
export const fetchMoviesBegin = createAction<boolean>("fetchMoviesBegin");
export const fetchMoviesSucces = createAction<Movies[]>("fetchMoviesSucces");
export const fetchMoviesEnd = createAction("fetchMoviesEnd");
export const fetchMoviesFailure = createAction<string>("fetchMoviesFailure");
