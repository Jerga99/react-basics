
import React from 'react';
import ResourceForm from './ResourceForm';

const ResourceUpdate = ({resource}) => {

  const updateResource = (formData) => {
    alert(JSON.stringify(formData))
  }

  return (
    <ResourceForm
      onSubmit={updateResource}
      resource={resource} />
  )
}

export default ResourceUpdate;
