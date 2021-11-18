import axios from 'axios';

/*
  later url to be "/api/get-contacts"
*/
export function requestGetContacts() {

  return axios.request({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
  });
}