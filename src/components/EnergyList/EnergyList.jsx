import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import useEnergy from '../../hooks/useEnergy';
import './EnergyList.css';

const EnergyList = () => {
    const { products, loading, error } = useEnergy();

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <Card 
                    key={product.id}
                    id={product.id} 
                    brand={product.brand} 
                    name={product.name} 
                    rating={product.rating || 'No rating'} 
                />
            ))}
        </div>
        
    );
};

export default EnergyList;
