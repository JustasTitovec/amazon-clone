import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../state/StateProvider';
import { Link } from 'react-router-dom';

function CheckoutProduct({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <Link to={'/details/' + id} style={{ textDecoration: 'none' }}>
          <p className="checkoutProduct__title">{title}</p>
        </Link>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐️
              </span>
            ))}
        </div>

        <button onClick={removeFromBasket} key={id}>
          Remove from basket
        </button>
      </div>
      <div className="checkoutProduct__price">
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
