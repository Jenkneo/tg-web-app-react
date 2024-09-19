import React from 'react';
import { useParams } from 'react-router-dom';
import './EnergyCard.css';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div className="product-card">
            <div className="product-name">Original</div>
            <div className="product-brand">Brand: Adrenaline</div>
            <div className="product-rating">Rating: 9.45</div>
            <div className="product-description">
                Lorem ipsum dolor sit amet.
            </div>
        </div>
    );
};

export default ProductDetail;
