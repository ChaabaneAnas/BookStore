import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asses/logo.png';

const Header = () => (
  <nav>
    <div className="tabs">
      <h1 className="brand"><Link to="/">Bookstore CMS</Link></h1>
      <Link to="/">Books</Link>
      <Link to="/Categories">Categories</Link>
    </div>
    <img src={logo} alt="logo" />
  </nav>
);

export default Header;
