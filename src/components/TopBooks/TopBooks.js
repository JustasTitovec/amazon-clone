import React from 'react';
import './TopBooks.css';

function TopBooks({ id, title, author, image, rating, price }) {
  return (
    <div>
      <div className="topBooks">
        <div className="topBooks__image">
          <img src={image} />
        </div>
        <div className="topBooks__info">
          <h3>{title.substring(0, 20) + '...'}</h3>
          <h2> > {author}</h2>
          <span>
            {' '}
            {Array(rating)
              .fill()
              .map((index, i) => (
                <span role="img" aria-label="star" key={i}>
                  ⭐️
                </span>
              ))}
          </span>
          <p>${price}</p>
          <button>See all buying options</button>
        </div>
      </div>
    </div>
  );
}

export default TopBooks;
