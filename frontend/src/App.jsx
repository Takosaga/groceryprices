import React, { useEffect, useState } from 'react';
import './styles.css';
import PriceCard from './components/PriceCard';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/prices') 
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>🛒 Grocery Prices</h1>
      <div className="container">
        {items.map((item, index) => (
          <PriceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
