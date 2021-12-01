import { call, takeEvery, put } from "redux-saga/effects";
import {
  fetchPeoplesBegin,
  fetchPeoplesSuccess,
  fetchPeoplesEnd,
  fetchPeoplesFailure,
} from "../../slices/peoplesSlice";
import PeopleService from "../../../services/PeopleServices";
import { GetPeoplesInterface } from "../../../pages/peoplePage/PeoplePage";
import { fetchPeoples } from "../actions/peoplesActions";

export function* fetchPeoplesWorker(action: ReturnType<typeof fetchPeoples>) {
  try {
    yield put(fetchPeoplesBegin(true));
    const currentPeople: GetPeoplesInterface = yield call(
      PeopleService.getPeoples,
      action.payload
    );
    yield put(fetchPeoplesSuccess(currentPeople.results));
  } catch (error) {
    yield put(fetchPeoplesFailure(error as string));
  } finally {
    yield put(fetchPeoplesEnd());
  }
}

export const peopleWatcher = [takeEvery(fetchPeoples.type, fetchPeoplesWorker)];
