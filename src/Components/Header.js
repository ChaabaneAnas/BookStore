import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav>
        <h1><Link to='/'>Bookstore CMS</Link></h1>
        <Link to='/'>Books</Link>
        <Link to='/Categories'>Categories</Link>
      </nav>
    );
  };

  export default Header;