import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './EnergyList.css';

const EnergyList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Создаем "фейковые" данные для тестирования
        const fakeData = [
            { id: 1, brand: 'Вот здесь еще надо', name: 'хуйнуть поиск, но я пока не знаю', rating: '★★★★★' },
            { id: 2, brand: 'Adrenaline', name: 'Game Fuel Candy', rating: '★★★★★' },
            { id: 3, brand: 'Adrenaline', name: 'Game Fuel Mango', rating: '★★★★☆' },
            { id: 4, brand: 'Burn', name: 'Сочная энергия', rating: '★★★☆☆' },
            { id: 5, brand: 'Burn', name: 'Original', rating: '★★★☆☆' },
        ];

        // Симулируем задержку запроса
        setTimeout(() => {
            setProducts(fakeData);
        }, 1000); // Задержка 1 секунда для имитации запроса
    }, []);

    // useEffect(() => {
    //     // Выполняем запрос к API
    //     fetch('https://endpoint.su/api/energy')
    //         .then(response => response.json())
    //         .then(data => setProducts(data)) // Сохраняем данные в состоянии
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []); // Пустой массив в зависимости, чтобы запрос выполнен только один раз при монтировании

    return (
        <div className="product-list">
            {products.map((product) => (
                <Card 
                    key={product.id}
                    id={product.id} 
                    brand={product.brand} 
                    name={product.name} 
                    rating={product.rating} 
                />
            ))}
        </div>
        
    );
};

export default EnergyList;
