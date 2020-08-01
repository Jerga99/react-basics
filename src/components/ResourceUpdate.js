
import React from 'react';
import ResourceForm from './ResourceForm';
import { updateResourceApi } from '../actions';

const ResourceUpdate = ({resource, onResourceUpdate}) => {

  const updateResource = async (resourceData) => {
    const updatedResource = await updateResourceApi(resourceData._id, resourceData);
    onResourceUpdate(updatedResource);
  }

  return (
    <ResourceForm
      onSubmit={updateResource}
      resource={resource} />
  )
}

export default ResourceUpdate;
