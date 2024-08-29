// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; // Optional: Add specific styles for the cart component

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            <div className="product-listing">
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((product, index) => (
                        <div key={index} className="card cart-card mb-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="card-title">
                                            <Link to={`/product/${product.id}`} className="card-link">
                                                {product.title}
                                            </Link>
                                        </h5>
                                        <p className="card-text">${product.price}</p>
                                    </div>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Cart;
