import React, { useEffect } from 'react';
import { useStateValue } from '../../state/StateProvider';
import './Checkout.css';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../Subtotal.js';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-ncino.jpg?_JotF4SJdrsbmNVSEUedOmFQSYXbxMaP&itok=rgCnuDLK"
          alt=""
        />
        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
