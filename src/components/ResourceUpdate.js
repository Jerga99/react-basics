
import React, { useState, useEffect, useRef } from 'react';
import ResourceForm from './ResourceForm';
import withAlert from '../hoc/withAlert';
import { updateResourceApi } from '../actions';

const initAlert = () => ({success: null, error: null})

const ResourceUpdate = ({resource, onResourceUpdate, myCustomProp, myCustomFunction}) => {
  const [alert, setAlert] = useState(initAlert());
  const setTimeoutId = useRef(null);

  const resourceId = resource?._id;
  const resetAlert = () => setAlert(initAlert());
  const resetTimeout = () => setTimeoutId?.current && clearTimeout(setTimeoutId.current);

  useEffect(() => {
    resetAlert();
    resetTimeout();
    return () => resetTimeout()
  }, [resourceId]);

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

export default withAlert(ResourceUpdate);

