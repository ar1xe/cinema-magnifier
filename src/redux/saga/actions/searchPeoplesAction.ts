import { createAction } from "@reduxjs/toolkit";

export const fetchSearchPeoples =
  createAction<{ page: number; query: string }>("fetchSearchPeoples");
