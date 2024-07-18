import React from 'react';

const Brief = ({ orderDetails }) => {
  return (
    <div className="brief">
      <h2>Resumen del Pedido</h2>
      <ul>
        {orderDetails.items.map((item, index) => (
          <li key={index}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${orderDetails.total}</p>
    </div>
  );
};

export default Brief;