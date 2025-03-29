import React from 'react';
import '../styles.css';

const PriceCard = ({ item }) => {
  return (
    <div className="card">
      <h2>{item.name}</h2>
      <p>Market: {item.market}</p>
      <p className="price">₺{item.price}</p>
    </div>
  );
};

export default PriceCard;
