import React from 'react';
import './Product.scss';
import { useStateValue } from '../../state/StateProvider.js';
import { Link } from 'react-router-dom';

function Product({ id, title, image, price, rating, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity
      }
    });
  };

  return (
    <div className="product">
      <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating" key={rating}>
            {Array(rating)
              .fill()
              .map((index, i) => (
                <span role="img" aria-label="star" key={i}>
                  ⭐️
                </span>
              ))}
          </div>
        </div>
      </Link>
      <img src={image} alt="watch" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
