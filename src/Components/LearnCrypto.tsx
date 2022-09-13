import React from "react";
import "../css/CryptoMenu.css";

const LearnCrypto = () => {
  return (
    <div className="cryptoMenu__container_learn">
      <div className="cryptoMenu__container__top">
        <p>All Crypto Articles</p>
        <p>Analysis</p>
        <p>Guides</p>
      </div>

      <div className="cryptoMenu__container__mid">
        <p>Glossary</p>
        <p>Methods</p>
      </div>

      <div className="cryptoMenu__container__bt">
        <p>Videos</p>
        <p>Podcasts</p>
        <p>News Letter</p>
        <p>Research Reports</p>
      </div>
    </div>
  );
};

export default LearnCrypto;
