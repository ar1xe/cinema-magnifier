import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPeopleSearchSuccess,
  fetchSearchPeoplesBegin,
} from "../../slices/searchPeopleSlice";

import { GetPeoplesInterface } from "../../../pages/peoplePage/PeoplePage";
import { fetchSearchPeoples } from "../actions/searchPeoplesAction";
import SearchServices from "../../../services/SearchServices";

export function* fetchSearchPeoplesWorker(
  action: ReturnType<typeof fetchSearchPeoples>
) {
  try {
    yield put(fetchSearchPeoplesBegin(true));
    const currentSearchPeople: GetPeoplesInterface = yield call(
      SearchServices.getPeopleSearch,
      action.payload
    );
    yield put(
      fetchPeopleSearchSuccess({
        results: currentSearchPeople.results,
        page: action.payload,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export const peopleSearchWatcher = [
  takeEvery(fetchSearchPeoples.type, fetchSearchPeoplesWorker),
];
