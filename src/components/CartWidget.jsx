import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget({ cartItems }) {
  const [showCart, setShowCart] = useState(false);
  const cartItemCount = cartItems.length;

  const handleCartClick = () => {
    setShowCart(!showCart); 
  };

  return (
    <div className="cart-widget">
      <FaShoppingCart size={18} onClick={handleCartClick} />
      <span>{cartItemCount}</span>

      {showCart && (
        <div className="cart-dropdown">
          <h3>Carrito de Compras</h3>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.title}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <button>Pagar</button>
        </div>
      )}
    </div>
  );
}

export default CartWidget;