
import React, { useState, useEffect } from 'react';
import ResourceSearch from '../components/ResourceSearch';
import ResourceList from '../components/ResourceList';
import ResourceDetail from '../components/ResourceDetail';
import ResourceUpdate from '../components/ResourceUpdate';
import Header from '../components/Header';

import { getResources, deleteResourceApi } from '../actions';

const ResourceHome = () => {
  const [selectedResource, setSetlectedResource] = useState();
  const [resources, setResources] = useState([]);
  const [isDetailView, setDetailView] = useState(true);

  useEffect(() => {
    async function _getResources() {
      const _resources = await getResources();
      setResources(_resources);
    }

    _getResources();
  }, [])

  const findResourceIndex = (resource) => {
    return resources.findIndex(r => r._id === resource._id);
  }

  const mutateResourceList = (resource, task) => {
    const resourceIndex = findResourceIndex(resource);
    const copy = [...resources];

    if (task === 'update') {
      copy[resourceIndex] = resource;
    } else {
      copy.splice(resourceIndex, 1);
    }

    return copy;
  }

  const hydrateResources = (updatedResource, task) => {
    const updatedResources = mutateResourceList(updatedResource, task);
    setResources(updatedResources);
    return updatedResources;
  }

  const handleResourceUpdate = updatedResource => {
    hydrateResources(updatedResource, 'update')
    setSetlectedResource(updatedResource);
  }

  const deleteResource = async () => {
    const isConfirm = window.confirm('Are you sure you want to delete this resouce ?');

    if (isConfirm) {
      const deletedResource = await deleteResourceApi(activeResource?._id);
      const updatedResources = hydrateResources(deletedResource, 'delete');
      setSetlectedResource(updatedResources[0] || null);

      if (updatedResources.length === 0 && !isDetailView) {
        setDetailView(true);
      }
    }
  }

  const hasResources = resources && resources.length > 0;
  const activeResource = selectedResource || (hasResources && resources[0]) || null;

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Resources</span>
            <span className="badge badge-secondary badge-pill">{resources.length}</span>
          </h4>
          <ResourceSearch />
          <ResourceList
            activeId={activeResource?._id}
            onItemClick={setSetlectedResource}
            resources={resources} />
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Resource {activeResource?._id}
            { hasResources &&
              <>
                <button
                  onClick={() => setDetailView(!isDetailView)}
                  className={`btn btn-sm ml-2 mr-2 ${isDetailView ? 'btn-warning' : 'btn-primary'}`}>
                  { isDetailView ? 'Edit' : 'Detail'}
                </button>
                <button
                  onClick={deleteResource}
                  className="btn btn-danger btn-sm">
                  Delete
                </button>
              </>
            }
          </h4>
          { isDetailView ?
            <ResourceDetail resource={activeResource} /> :
            <ResourceUpdate
              resource={activeResource}
              onResourceUpdate={handleResourceUpdate}
            /> }
        </div>
      </div>
    </div>
  )
}

export default ResourceHome;
