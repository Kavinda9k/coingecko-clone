import React from "react";
import "../css/CryptoMenu.css";

const CryptoMenu = () => {
  return (
    <div className="cryptoMenu__container">
      <div className="cryptoMenu__container__top">
        <p>By marketcap</p>
        <p>New cryptocurrencies</p>
      </div>

      <div className="cryptoMenu__container__mid">
        <p>Categorires</p>
        <p>Watchlists</p>
        <p>Gainers & Losers</p>
        <p>High Volume</p>
      </div>

      <div className="cryptoMenu__container__bt">
        <p>All coins</p>
        <p>Compare</p>
        <p>Global</p>
      </div>
    </div>
  );
};

export default CryptoMenu;
