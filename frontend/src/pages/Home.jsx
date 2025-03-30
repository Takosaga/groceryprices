import React, { useEffect, useState } from 'react';
import PriceCard from '../components/PriceCard';

function Home() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  const searchItems = async () => {
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    if (data.success) {
      const flatResults = data.results.map(item => ({
        name: item.itemName,
        market: item.lowestPrice?.store || 'N/A',
        price: item.lowestPrice?.price || 'N/A'
      }));
      setItems(flatResults);
    }
  };

  useEffect(() => {
    fetch('/api/prices')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchItems();
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="🔍 Search for a product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="container">
        {items.map((item, index) => (
          <PriceCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
