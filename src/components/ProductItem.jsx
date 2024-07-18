import React from 'react';
import AddItemButton from './AddItemButton';

const ProductItem = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <AddItemButton onAdd={handleAddToCart} />
    </div>
  );
};

export default ProductItem;