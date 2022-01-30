import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GetPeoplesInterface,
  Peoples,
} from "../../pages/peoplePage/PeoplePage";

interface SearchPeoplesState {
  searchPeoples: Peoples[];
  peoplesLoading: boolean;
}

const initialState: SearchPeoplesState = {
  searchPeoples: [],
  peoplesLoading: false,
};

const searchPeopleSlice = createSlice({
  name: "searchPeoples",
  initialState,
  reducers: {
    fetchSearchPeoplesBegin: (state, action: PayloadAction<boolean>) => ({
      ...state,
      peoplesLoading: action.payload,
    }),
    fetchPeopleSearchSuccess: (
      state,
      action: PayloadAction<GetPeoplesInterface>
    ) => {
      console.log(action.payload.results);
      return {
        ...state,
        searchPeoples: action.payload.results,
      };
    },
  },
});

export const { fetchPeopleSearchSuccess, fetchSearchPeoplesBegin } =
  searchPeopleSlice.actions;
export default searchPeopleSlice.reducer;
