import React from 'react';

const CategoryButtons = ({ onCategoryChange }) => {
  return (
    <div className="category-buttons">
      <button onClick={() => onCategoryChange('todos')}>Todos</button>
      <button onClick={() => onCategoryChange('comestibles')}>Comestibles</button>
      <button onClick={() => onCategoryChange('no comestibles')}>No Comestibles</button>
    </div>
  );
};

export default CategoryButtons;