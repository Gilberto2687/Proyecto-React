import React, { useState } from 'react';

const Checkout = ({ cartItems, onCheckout }) => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout();
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre en la Tarjeta:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Número de Tarjeta:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Fecha de Expiración:
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;