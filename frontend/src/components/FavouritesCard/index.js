import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaGetContacts } from '../../store/actions/contacts/actions';
import { Card } from 'antd';


export default function Favourites() {
  const dispatch = useDispatch();

  // Get favourites from redux
  useEffect(() => {
    dispatch(sagaGetContacts())
  }, [dispatch]);

  const favourites = useSelector(state => state.favourites.favourites);

  return (
    <div className='favourites'>
      <h2 className='favourites-header'>Favorite</h2>
      <div className='favourites-list'>
        {
          favourites ? (
            favourites.map(fav => (
              <Card key={fav.id}>

              </Card>
            ))
          ) : (
            <Card style={{ width: 300 }} loading>

            </Card>
          )
        }
      </div>
    </div>
  )
}