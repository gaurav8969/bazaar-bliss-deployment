// src/RecommendationEngine.js
export const getRecommendedProducts = (products) => {
    let viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];

    return products.filter(product => viewedProducts.includes(product.id));
};
