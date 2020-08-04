

import React from 'react';
import ResourceForm from '../components/ResourceForm';

import { createResourceApi } from '../actions';

const ResourceNew = () => {

  const createResource = async resource => {
    try {
      await createResourceApi(resource);
    } catch(e) {

    }
  }

  return (
    <ResourceForm
      onSubmit={createResource}
    />
  )
}

export default ResourceNew;
