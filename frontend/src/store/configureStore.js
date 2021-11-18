import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import contactsReducer from './reducers/contacts';
import favouritesReducer from './reducers/favourites';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  contacts: contactsReducer,
  favourites: favouritesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;