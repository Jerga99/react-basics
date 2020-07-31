
import React from 'react';

const Header = () =>
  <div className="py-5 text-center">
    <img
      alt="React logo"
      style={{height: '150px'}}
      src={process.env.PUBLIC_URL + '/logo512.png'} />
    <h2>Keep Resources</h2>
    <p className="lead">Keep your resource at once place</p>
  </div>

export default Header;
