

import axios from 'axios';


export function getResources() {
  return axios
    .get('/api/resources')
    .then(res => res.data)
}

export function updateResourceApi(resourceId, resourceData) {
  return axios
    .patch(`/api/resources/${resourceId}`, resourceData)
    .then(res => res.data)
    .catch(err => Promise.reject(err?.response?.data))
}

export function deleteResourceApi(resourceId) {
  return axios
    .delete(`/api/resources/${resourceId}`)
      .then(res => res.data)
}

export function createResourceApi(resource) {
  return axios
    .post(`/api/resources`, resource)
    .then(res => res.data)
    .catch(err => Promise.reject(err?.response?.data))
}
