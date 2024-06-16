import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Brand</Link>
      <Link to="/category/1">Category 1</Link>
      <Link to="/category/2">Category 2</Link>
      <div>Cart</div>
    </nav>
  );
}

export default Navbar;