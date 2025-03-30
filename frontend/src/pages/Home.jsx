import React, { useEffect, useState } from 'react';
import PriceCard from '../components/PriceCard';

function Home() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  const searchItems = async () => {
    try {
      const res = await fetch(`/api/search?q=${query}`);
      const text = await res.text();

      if (!text) {
        console.warn('Empty response from /api/search');
        setItems([]);
        return;
      }

      const data = JSON.parse(text);

      if (data.success) {
        const flatResults = data.results.map(item => ({
          name: item.itemName,
          market: item.lowestPrice?.store || 'N/A',
          price: item.lowestPrice?.price || 'N/A'
        }));
        setItems(flatResults);
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  useEffect(() => {
    fetch('/api/prices')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error loading prices:', err));
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
