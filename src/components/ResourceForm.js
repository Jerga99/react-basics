

import React, { useState } from 'react';
const RESOURCE_TYPES = ['blog', 'video', 'book'];

const ResourceForm = ({resource, onSubmit}) => {
  const [uResource, setUResource] = useState(resource);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUResource({...uResource, [name]: value})
  }

  const handleSubmit = () => {
    onSubmit(uResource)
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={uResource.title}
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="How to survive in mountains" />
      </div>
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleChange}
          value={uResource.description}
          name="description"
          className="form-control"
          id="description"
          placeholder="Just some description"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="link">Resource Link</label>
        <div className="input-group">
          <input
            onChange={handleChange}
            value={uResource.link}
            name="link"
            type="text"
            className="form-control"
            id="link"
            placeholder="Username" />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="type">Type</label>
        <select
          onChange={handleChange}
          className="form-control"
          name="type"
          value={uResource.type}
          id="type">
          { RESOURCE_TYPES.map(type =>
            <option key={type} value={type}>{type}</option>
            )
          }
        </select>
      </div>
      <hr className="mb-4" />
      <button
        onClick={handleSubmit}
        className="btn btn-primary btn-lg btn-block"
        type="button">Submit</button>
    </form>
  )
}

export default ResourceForm;
