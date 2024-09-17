import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    // Здесь можно выполнить запрос к API для получения деталей товара по ID
    // Или использовать данные, переданные через state/props

    return (
        <div>
            <h1>Ну типа здесь будет энчик, но пока его нету, ахахах</h1>
        </div>
    );
};

export default ProductDetail;
