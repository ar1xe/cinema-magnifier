import { RootState } from "../store";
import { Peoples } from "../../pages/peoplePage/PeoplePage";

export const getPeoples = (state: RootState): Peoples[] => state.peoplesState.peoples;
