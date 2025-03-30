import React from 'react';
import './styles.css';
import { Routes, Route, Link } from 'react-router-dom';
import TopViewed from './pages/TopViewed';
import Brands from './pages/Brands';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <h1 className="title">AkcijuDraugs</h1>
        <p className="subtitle">Labākās pārtikas atlaides Latvijas pilsētās</p>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/top-viewed">Top Viewed</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-viewed" element={<TopViewed />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
