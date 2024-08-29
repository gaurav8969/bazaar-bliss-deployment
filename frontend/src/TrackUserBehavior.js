const TrackUserBehavior = {
    trackProductView(product) {
        console.log('Tracking product view:', product);
        localStorage.setItem('preferredCategory', product.category);
    },

    trackAddToCart(product) {
        console.log('Tracking add to cart:', product);
        // You can expand this logic to track other behaviors related to adding products to the cart
        localStorage.setItem('lastAddedProduct', product.id);
    },

    getUserPreferences() {
        const preferredCategory = localStorage.getItem('preferredCategory') || 'electronics';
        const preferredPriceRange = 'mid';  // Default value
        return { preferredCategory, preferredPriceRange };
    }
};

export default TrackUserBehavior;
