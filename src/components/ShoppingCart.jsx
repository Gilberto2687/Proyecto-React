import React from 'react';
import Brief from './Brief';

const ShoppingCart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={() => alert()}>Pagar</button>

      
      <Brief orderDetails={{ items: cartItems, total: totalPrice }} />
    </div>
  );
};

export default ShoppingCart;