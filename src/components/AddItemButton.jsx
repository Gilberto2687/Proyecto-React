import React from 'react';

const AddItemButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd}>
      Add to Cart
    </button>
  );
};

export default AddItemButton;