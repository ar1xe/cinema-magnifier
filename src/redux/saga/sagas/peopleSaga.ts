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

export function* fetchPeoplesSaga(page: any) {
  console.log(page);
  try {
    yield put(fetchPeoplesBegin(true));
    const currentPeople: GetPeoplesInterface = yield call(() =>
      PeopleService.getPeoples(page)
    );

    yield put(fetchPeoplesSuccess(currentPeople.results));
  } catch (error) {
    yield put(fetchPeoplesFailure(error as string));
  } finally {
    yield put(fetchPeoplesEnd());
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchPeoples.type, fetchPeoplesSaga);
}
