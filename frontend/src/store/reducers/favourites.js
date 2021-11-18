import produce from 'immer';


export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

const  INITIAL_STATE = {
  favourites: [],
  error: ''
}

// Using immer for immutable state management
const contacts = (state = INITIAL_STATE, action) => produce(state, draft => {
  switch(action.type) {
    case ADD_FAVOURITE:
      draft.favourites = [...draft.favourties, action.favourite];
      draft.error = action.error;
      break;

    case REMOVE_FAVOURITE:
      draft.favourites = [...draft.favourites.filter(obj => obj.id !== action.favourite)];
      draft.error = action.error;
      break;

    default:
      break;
  }
});

export default contacts;