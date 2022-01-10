import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GetPeoplesInterface,
  Peoples,
} from "../../pages/peoplePage/PeoplePage";

interface PeoplesState {
  peoples: Peoples[];
  peoplesLoading: boolean;
  error: string;
}

const initialState: PeoplesState = {
  peoples: [],
  peoplesLoading: false,
  error: "",
};

const peoplesSlice = createSlice({
  name: "peoples",
  initialState,
  reducers: {
    fetchPeoplesBegin: (state, action: PayloadAction<boolean>) => ({
      ...state,
      peoplesLoading: action.payload,
    }),
    fetchPeoplesSuccess: (
      state,
      action: PayloadAction<GetPeoplesInterface>
    ) => ({
      ...state,
      peoples:
        action.payload.page === 1
          ? action.payload.results
          : state.peoples.concat(action.payload.results),
    }),
    fetchPeoplesEnd: (state) => ({
      ...state,
      peoplesLoading: false,
    }),
    fetchPeoplesFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export const {
  fetchPeoplesBegin,
  fetchPeoplesSuccess,
  fetchPeoplesEnd,
  fetchPeoplesFailure,
} = peoplesSlice.actions;
export default peoplesSlice.reducer;
