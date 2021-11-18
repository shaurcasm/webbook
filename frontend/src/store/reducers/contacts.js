import produce from 'immer';
import * as actionTypes from '../actions/contacts/actionTypes';



const  INITIAL_STATE = {
  contacts: [],
  error: ''
}

// Using immer for immutable state management
const contacts = (state = INITIAL_STATE, action) => produce(state, draft => {
  switch(action.type) {
    case actionTypes.GET_CONTACTS:
      draft.contacts = action.contacts;
      draft.error = action.error;
      break;

    case actionTypes.ADD_CONTACT:
      draft.contacts = [...draft.contacts, action.contact];
      draft.error = action.error;
      break;

    case actionTypes.REMOVE_CONTACT:
      draft.contacts = [draft.contacts.filter(obj => obj.id !== action.contact)];
      draft.error = action.error;
      break;

    default:
      break;
  }
});

export default contacts;