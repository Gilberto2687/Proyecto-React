import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Inicio</Link>
      </div>
      <div>
        <Link to="/category/1">Comestibles</Link>
      </div>
      <div>
        <Link to="/category/2">No Comestibles</Link>
      </div>
    </nav>
  );
}

export default Navbar;