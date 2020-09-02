import React, { useEffect } from 'react';
import { useStateValue } from '../../state/StateProvider';
import './Checkout.scss';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal.js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../content/reducer';
import TopBooks from '../../components/TopBooks/TopBooks';
import data from '../../data.js';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          {basket.length === 0 ? (
            <div className="checkout__emptyBasket">
              <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" />
              <h2>Your Amazon Cart is empty</h2>
            </div>
          ) : (
            <div>
              <div className="checkout__title">
                <h2>Shopping Cart</h2>
                <p>Price</p>
              </div>

              {basket.map((item, i) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  key={i}
                />
              ))}
            </div>
          )}

          {basket.length !== 0 ? (
            <div>
              <div className="checkout__subtotal">
                <CurrencyFormat
                  renderText={value => (
                    <>
                      <p>
                        Subtotal ({basket.length} items):
                        <strong>{` ${value}`}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </div>
              <p className="checkout__footer">
                The price and availability of items at Amazon.com are subject to
                change. The Cart is a temporary place to store a list of your
                items and reflects each item's most recent price. Shopping Cart.
                Learn more Do you have a gift card or promotional code? We'll
                ask you to enter your claim code when it's time to pay.
              </p>
            </div>
          ) : null}
        </div>

        {basket.length > 0 && (
          <div className="checkout__right">
            <div>
              <Subtotal />
            </div>
            <div className="checkout__books">
              <h1>Top rated books: </h1>
              {data.books.map(book => {
                return (
                  <TopBooks
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    price={book.price}
                    rating={book.rating}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
