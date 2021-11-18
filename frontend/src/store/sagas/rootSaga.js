import { takeLatest } from 'redux-saga/effects';
import { SAGA_GET_CONTACTS } from '../actions/contacts/actionTypes';
import { handleGetContacts } from './handlers/contacts';


export function* watcherSaga() {
  yield takeLatest(SAGA_GET_CONTACTS, handleGetContacts)
}