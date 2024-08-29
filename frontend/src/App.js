// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');
    const [fontSize, setFontSize] = useState('medium');
    const [layout, setLayout] = useState('grid');

    const handleThemeChange = (newTheme) => setTheme(newTheme);
    const handleFontSizeChange = (newSize) => setFontSize(newSize);
    const handleLayoutChange = (newLayout) => setLayout(newLayout);

    return (
        <CartProvider>
            <Router>
                <div className={`App ${theme}-theme ${fontSize}-font ${layout}-layout`}>
                    <div className="app-container">
                        <header className="fancy-header">
                            <h1>Bazaar Bliss</h1>
                        </header>
                        <nav className="navbar">
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/cart">Cart</Link>
                        </nav>
                        <div className="cui-controls">
                            <div className="dropdown">
                                <button className="dropdown-button">Theme</button>
                                <div className="dropdown-content">
                                    <button onClick={() => handleThemeChange('light')}>Light Theme</button>
                                    <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropdown-button">Font</button>
                                <div className="dropdown-content">
                                    <button onClick={() => handleFontSizeChange('small')}>Small Font</button>
                                    <button onClick={() => handleFontSizeChange('medium')}>Medium Font</button>
                                    <button onClick={() => handleFontSizeChange('large')}>Large Font</button>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropdown-button">Layout</button>
                                <div className="dropdown-content">
                                    <button onClick={() => handleLayoutChange('grid')}>Grid Layout</button>
                                    <button onClick={() => handleLayoutChange('list')}>List Layout</button>
                                </div>
                            </div>
                        </div>
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<ProductList />} />
                                <Route path="/product/:id" element={<ProductDetail />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                            </Routes>
                        </main>
                    </div>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
