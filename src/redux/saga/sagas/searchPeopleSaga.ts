import { call, put, takeEvery } from "redux-saga/effects";
import { fetchSearchPeoplesBegin } from "../../slices/searchPeopleSlice";
import { fetchPeoplesSuccess } from "../../slices/peoplesSlice";
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
      action.payload.page,
      action.payload.query
    );
    yield put(
      fetchPeoplesSuccess({
        results: currentSearchPeople.results,
        page: action.payload.page,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export const peopleSearchWatcher = [
  takeEvery(fetchSearchPeoples.type, fetchSearchPeoplesWorker),
];
