import { call, put } from "redux-saga/effects";
import { getContacts } from "../../actions/contacts/actions";
import { requestGetContacts } from "../requests/contacts";


export function* handleGetContacts(action) {
  try {
    const response = yield call(requestGetContacts);
    const { data } = response;
    yield put(getContacts(data));
  } catch (error) {
    console.log(error)
  }
}