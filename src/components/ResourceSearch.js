
import React from 'react';

const ResourceSearch = ({onSearch}) => {

  return (
    <form className="card p-2">
      <div className="input-group">
        <input
          onKeyUp={(e) => onSearch(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Some title" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary">Search</button>
        </div>
      </div>
    </form>
  )
}

export default ResourceSearch;
