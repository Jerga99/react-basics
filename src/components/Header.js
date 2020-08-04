
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  <div className="py-5 text-center">
    <img
      alt="React logo"
      style={{height: '150px'}}
      src={process.env.PUBLIC_URL + '/logo512.png'} />
    <h2>Keep Resources</h2>
    <p className="lead">Keep your resource at once place</p>
    <Link to="/" className="btn btn-outline-primary mr-2">
      Home
    </Link>
    <Link to="/new" className="btn btn-outline-primary mr-2">
      New
    </Link>
    <Link to="/about" className="btn btn-outline-primary">
      About
    </Link>
  </div>

export default Header;
