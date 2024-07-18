import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <img src={item.image} alt={item.name} /> 
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetail;