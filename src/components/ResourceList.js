
import React, { useState } from 'react';

const initialResources = [
  {
    _id: '1',
    title: 'Resource 1',
    description: 'Description 1',
    link: 'https://google.com',
    type: 'blog'
  },
  {
    _id: '2',
    title: 'Resource 2',
    description: 'Description 2',
    link: 'https://google.com',
    type: 'video'
  },
  {
    _id: '3',
    title: 'Resource 3',
    description: 'Description 3',
    link: 'https://google.com',
    type: 'book'
  }
]

// 1. create state with initialResources
// 2. Iterate resources
// 3. display resouce info


const ResourceList = () => {
  const [resources, setResources] = useState(initialResources);

  return (
    <ul className="list-group mb-3 resource-list">
      { resources.map(resource =>
        <li key={resource._id} className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{resource.title}</h6>
            <small className="text-muted">{resource.description}</small>
          </div>
          <span className="text-muted">{resource.type}</span>
        </li>
      )}
    </ul>
  )
}

export default ResourceList;
