import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './EnergyList.css';

const EnergyList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Выполняем запрос к API
        fetch('https://endpoint.su/api/energy')
            .then(response => response.json())
            .then(data => setProducts(data)) // Сохраняем данные в состоянии
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Пустой массив в зависимости, чтобы запрос выполнен только один раз при монтировании

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <Card 
                    key={index}
                    brand={product.brand} 
                    name={product.name} 
                    rating={product.rating} 
                />
            ))}
        </div>
    );
};

export default EnergyList;
