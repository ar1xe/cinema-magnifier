import { createAction } from "@reduxjs/toolkit";
import { Peoples } from "../../../pages/peoplePage/PeoplePage";

export const fetchPeoples = createAction<string>("fetchMovies");
export const fetchPeoplesBegin = createAction<boolean>("fetchMoviesBegin");
export const fetchPeoplesSucces = createAction<Peoples[]>("fetchMoviesSucces");
export const fetchPeoplesEnd = createAction("fetchMoviesEnd");
export const fetchPeoplesFailure = createAction<string>("fetchMoviesFailure");
