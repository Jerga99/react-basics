
import React, { useState, useEffect, useRef } from 'react';
import ResourceForm from './ResourceForm';
import { updateResourceApi } from '../actions';

const initAlert = () => ({success: null, error: null})

const ResourceUpdate = ({resource, onResourceUpdate}) => {
  const [alert, setAlert] = useState(initAlert());
  const setTimeoutId = useRef(null);

  const resetAlert = () => setAlert(initAlert());

  useEffect(() => {
    resetAlert();
    setTimeoutId?.current && clearTimeout(setTimeoutId.current);
  }, [resource]);

  const displayAlert = (type, message) => {
    const _alert = initAlert();
    _alert[type] = message;
    setAlert(_alert);
    setTimeoutId.current = setTimeout(() => {
      resetAlert();
    }, 3000);
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
