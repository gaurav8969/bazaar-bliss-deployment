import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import TrackUserBehavior from '../TrackUserBehavior';

function ProductList() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios.get('https://bazaar-bliss-backend.vercel.app/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        TrackUserBehavior.trackAddToCart(product);
    };

    return (
        <div className="container">
            <h2>Products</h2>
            <div className="row product-listing">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="btn btn-secondary mt-2"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
