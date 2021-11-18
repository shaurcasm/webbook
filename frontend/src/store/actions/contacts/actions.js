import * as actionTypes from './actionTypes';

export const getContacts = (contacts) => ({
  type: actionTypes.GET_CONTACTS,
  contacts
});

export const sagaGetContacts = () => ({
  type: actionTypes.SAGA_GET_CONTACTS
})