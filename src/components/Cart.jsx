import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
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
  );
}

export default Cart;