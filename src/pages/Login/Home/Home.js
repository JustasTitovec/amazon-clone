import React from 'react';
import './Home.css';
import Product from '../../Product.js';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_2x._CB419795291_.jpg"
        alt="home"
      />
      <div className="home__row">
        <Product
          id="12123124312"
          title="Samsung Galaxy Watch smartwatch (46mm, GPS, Bluetooth) – Silver/Black (US Version with Warranty)"
          price={11.96}
          rating={5}
          image="https://www.amazon.com/images/I/81ZKNYBwYlL._AC_SL1500_.jpg"
        />
        <Product
          id="12321"
          title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality (Wireless Charging Case included), Black – US Version, SM-R175NZKAXAR"
          price={89.94}
          rating={5}
          image="https://www.amazon.com/images/I/61Kndu-dTLL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6543"
          title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
          price={37.71}
          rating={5}
          image="https://www.amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
        />
        <Product
          id="54232324"
          title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio"
          price={25.98}
          rating={4}
          image="https://www.amazon.com/images/I/61B04f0ALWL._AC_SL1500_.jpg"
        />
        <Product
          id="67543"
          title="iLuv TB100 Rose Gold True Wireless Earbuds Cordless in-Ear Bluetooth 5.0 with Hands-Free Call Microphone, IPX6 Waterproof Protection"
          price={49.99}
          rating={5}
          image="https://www.amazon.com/images/I/71DL2xEn3KL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0994394"
          title="Kindle E-reader (Previous Generation - 8th) - Black, 6 Display, Wi-Fi, Built-In Audible - Includes Special Offers"
          price={59.99}
          rating={4}
          image="https://www.amazon.com/images/I/61%2BtYhgtgwL._AC_SX679_.jpg"
        />
        <Product
          id="85030349"
          title="Fire TV Blaster - Add Alexa voice controls for power and volume on your TV and soundbar (requires compatible Fire TV and Echo devices)"
          price={34.99}
          rating={3}
          image="https://www.amazon.com/images/I/51qkhImJaAL._AC_SL1000_.jpg"
        />{' '}
        <Product
          id="758493"
          title="All-New Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
          price={149.99}
          rating={4}
          image="https://www.amazon.com/images/I/61piX33QmAL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="290348329048"
          title="WD 12TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0120HBK-NESN"
          price={169.99}
          rating={5}
          image="https://www.amazon.com/images/I/716SVGVhQML._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
