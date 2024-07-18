import React from 'react';
import CartWidget from './CartWidget';

function Header({ cartItems }) {
  return (
    <header>
      <nav>
        <CartWidget cartItems={cartItems} />
      </nav>
    </header>
  );
}

export default Header;