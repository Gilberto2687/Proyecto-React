import React, { useState } from 'react';
import CategoryButtons from './CategoryButtons';

const ItemList = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <CategoryButtons onCategoryChange={handleCategoryChange} />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;