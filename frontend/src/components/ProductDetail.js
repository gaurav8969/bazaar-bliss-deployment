import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Recommendations from './Recommendations';
import TrackUserBehavior from '../TrackUserBehavior';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://bazaar-bliss-backend.vercel.app/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                TrackUserBehavior.trackProductView(response.data);

                // Fetch user preferences (can be expanded as per AI logic)
                const preferences = TrackUserBehavior.getUserPreferences();
                console.log('User Preferences:', preferences);  // Log preferences

                fetchRecommendedProducts(preferences.preferredCategory);
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const fetchRecommendedProducts = (category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => {
                console.log('Fetched Products:', response.data);  // Log fetched products
                setRecommendedProducts(response.data);  // Just set the fetched data for now
            })
            .catch(error => console.error('Error fetching recommended products:', error));
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="img-fluid" />
            <p>{product.description}</p>
            <p>${product.price}</p>

            {/* AI-Powered Recommendations */}
            <h3>Recommended for You</h3>
            {recommendedProducts.length > 0 ? (
                <Recommendations products={recommendedProducts} />
            ) : (
                <p>No recommendations available at this time.</p>
            )}
        </div>
    );
}

export default ProductDetail;
