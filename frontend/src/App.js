import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaGetContacts } from './store/actions/contacts/actions';
import './App.css';
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaGetContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
