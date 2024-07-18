import React, { useState } from 'react';

const ItemQuantitySelector = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="item-quantity-selector">
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
      />
    </div>
  );
};

export default ItemQuantitySelector;