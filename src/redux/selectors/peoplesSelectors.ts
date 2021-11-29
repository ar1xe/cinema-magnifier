import { RootState } from "../store";

export const getPeoples = (state: RootState) => state.peoplesState.peoples;
