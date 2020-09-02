import React, { useEffect, useState } from 'react';
import data from '../../data.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useStateValue } from '../../state/StateProvider.js';
import './Details.scss';

function Details(props) {
  const [{ basket }, dispatch] = useStateValue();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = data.products.find(x => x._id === props.match.params.id);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating
      }
    });
  };

  const changeImage = e => {
    let activeIndex = e.target.getAttribute('index');
    setActiveIndex(activeIndex);
  };

  return (
    <div>
      <Header />
      <div className="details">
        <div className="details__gallery">
          {product.image.map((img, i) => {
            return (
              <img
                className="details__imageHover"
                src={img}
                alt="watch"
                index={i}
                onMouseEnter={changeImage}
                key={i}
              />
            );
          })}
        </div>
        <div className="details__images">
          <img src={product.image[activeIndex]} alt="watch" />
        </div>
        <div className="details__info">
          <div className="details__title">
            <p>{product.title}</p>
            <div className="details__rating">
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <span role="img" aria-label="star" key={i}>
                    ⭐️
                  </span>
                ))}
            </div>
            <p className="details__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
          </div>
          <div className="details__description" key={product.id}>
            {product.details.map((detail, i) => {
              return (
                <ul key={detail[i]}>
                  <li>{detail}</li>
                </ul>
              );
            })}
          </div>
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
