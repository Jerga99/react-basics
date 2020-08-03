
import React, { useState } from 'react';
import ResourceForm from './ResourceForm';
import { updateResourceApi } from '../actions';

const createAlert = () => ({success: null, error: null})

const ResourceUpdate = ({resource, onResourceUpdate}) => {
  const [alert, setAlert] = useState(createAlert());

  const displayAlert = (type, message) => {
    const _alert = createAlert();
    _alert[type] = message;
    setAlert(_alert);
  }

  const updateResource = async (resourceData) => {
    try {
      const updatedResource = await updateResourceApi(resourceData._id, resourceData);
      onResourceUpdate(updatedResource);
      displayAlert('success', 'Resouce was updated!');
    } catch(e) {
      displayAlert('error', e);
    }
  }

  return (
    <ResourceForm
      alert={alert}
      onSubmit={updateResource}
      resource={resource} />
  )
}

export default ResourceUpdate;
