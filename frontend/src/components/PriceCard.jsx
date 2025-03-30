import React from 'react';
import '../styles.css';

const PriceCard = ({ item }) => {
  return (
    <div className="price-card">
      <div className="price-header">
        <img src="/milk.png" alt="Milk Icon" className="price-icon" />
        <h2 className="item-name">{item.name}</h2>
      </div>
      <p className="market">🛒 Market: {item.market}</p>
      <p className="price">€ {item.price}</p>
    </div>
  );
};

export default PriceCard;


