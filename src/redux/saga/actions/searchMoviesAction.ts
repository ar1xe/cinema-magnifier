import { createAction } from "@reduxjs/toolkit";

export const fetchSearchMovies =
  createAction<{ page: number; query: string }>("fetchSearchMovies");
