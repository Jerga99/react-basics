

import axios from 'axios';


export function getResources() {
  return axios.get('http://localhost:3000/api/resources')
    .then(res => res.data)
}
