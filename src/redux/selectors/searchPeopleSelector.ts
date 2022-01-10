import { RootState } from "../store";
import { Peoples } from "../../pages/peoplePage/PeoplePage";

export const getPeopleSearch = (state: RootState): Peoples[] =>
  state.searchPeoplesState.searchPeoples;
