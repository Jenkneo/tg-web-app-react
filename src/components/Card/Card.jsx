import './Card.css';

const Card = ({ brand, name, rating }) => {
    return (
        <div className="product-item">
            <h3 className="brand">{brand}</h3>
            <p className="name">{name}</p>
            <p className="rating">{rating}</p>
        </div>
    );
};

export default Card;