

import React from 'react';
import { useParams } from 'react-router-dom';

const ResourceDetail = () => {
  const { id } = useParams();

  return (
    <h1>Resource detail page - {id}</h1>
  )
}

export default ResourceDetail;
