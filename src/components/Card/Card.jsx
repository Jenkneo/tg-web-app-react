import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, brand, name, rating }) => {
    return (
        <Link to={`/energy/${id}`} className="product-link">
            <div className="product__item">
                <h3 className="brand">{brand}</h3>
                <p className="name">{name}</p>
                <p className="rating">{rating}</p>
            </div>
        </Link>
    );
};

export default Card;