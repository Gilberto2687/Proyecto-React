import React from 'react';

const Description = ({ text }) => {
  return (
    <div className="description">
      <h3>Description</h3>
      <p>{text}</p>
    </div>
  );
};

export default Description;