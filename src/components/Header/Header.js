import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../state/StateProvider.js';
import { auth } from '../../firebase';

function Header(props) {
  const [{ basket, user }] = useStateValue();

  const login = user => {
    auth.signOut();
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__SearchInput"
          type="text"
          value={props.value}
          onChange={props.onChange}
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? 'Sign out' : 'Sign in'}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>
      </div>

      <Link className="header__link" to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            <span className="header__count"> {basket.length}</span>
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
