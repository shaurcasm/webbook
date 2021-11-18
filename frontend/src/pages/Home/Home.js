import Header from './components/Header';
import Favourites from './components/Favourites';
import Contacts from './components/Contacts';

import './Home.scss';

export default function Home() {

  return (
    <div className='homepage'>
      <Header />
      <Favourites />
      <Contacts />
    </div>
  )
}