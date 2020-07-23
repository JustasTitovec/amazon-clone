import React from 'react';
import './Footer.css';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="footer">
      <div onClick={topFunction} className="footer__scrollBack">
        Back to top
      </div>
      <div className="footer__links__container">
        <div className="footer__links">
          <div className="footer__columns">
            <p>
              <strong>Get to Know Us</strong>
            </p>
            <ul>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">About Amazon</a>
              </li>
              <li>
                <a href="/">Investor Relations</a>
              </li>
              <li>
                <a href="/">Amazon Devices</a>
              </li>
              <li>
                <a href="/">Amazon Tours</a>
              </li>
            </ul>
          </div>
          <div className="footer__columns">
            <p>
              <strong>Make Money with Us</strong>
            </p>
            <ul>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="/">Sell Your Apps on Amazon</a>
              </li>
              <li>
                <a href="/">Become an Affiliate</a>
              </li>
              <li>
                <a href="/">Advertise Your Products</a>
              </li>
              <li>
                <a href="/">Self-Publish with Us</a>
              </li>
              <li>
                <a href="/">Host an Amazon Hub</a>
              </li>
              <li>
                <a href="/"> > See More Make Money with Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__columns">
            <p>
              <strong>Amazon Payment Products</strong>
            </p>
            <ul>
              <li>
                <a href="/">Amazon Business Card</a>
              </li>
              <li>
                <a href="/">Shop with Points</a>
              </li>
              <li>
                <a href="/">Reload Your Balance</a>
              </li>
              <li>
                <a href="/">Invetor Relations</a>
              </li>
              <li>
                <a href="/">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>
          <div className="footer__columns">
            <p>
              <strong>Let Us Help You</strong>
            </p>
            <ul>
              <li>
                {' '}
                <a href="/">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="/">Your Account</a>
              </li>
              <li>
                <a href="/">Your Orders</a>
              </li>
              <li>
                <a href="/">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="/">Returns & Replacements</a>
              </li>
              <li>
                <a href="/">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="/">Amazon Assistant</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__logo"></div>
    </div>
  );
}

export default Footer;
