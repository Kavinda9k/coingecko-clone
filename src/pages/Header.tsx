import React from "react";
import "../css/Header.css";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import CryptoMenu from "../Components/CryptoMenu";
import Exchanges from "../Components/Exchanges";
import NFT from "../Components/NFT";
import LearnCrypto from "../Components/LearnCrypto";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [cryptoMenu, setCryptoMenu] = React.useState(false);
  const [exCMenu, setExCMenu] = React.useState(false);
  const [nftMenu, setNftMenu] = React.useState(false);
  const [learnMenu, setLearnMenu] = React.useState(false);

  const navigate = useNavigate();

  return (
    <div className="header__container">
      <div className="header__container_line">
        <div className="header__top">
          <div className="header__top__left">
            <p>
              Coins: <span>12915</span>
            </p>
            <p>
              Exchanges: <span>573</span>
            </p>
            <p>
              Market Cap: <span>$1,090,713,809,194</span>
            </p>
            <p>
              24h Vol: <span>$79,584,731,231</span>
            </p>
            <p>
              Dominance: <span>BTC 37.4%</span>
            </p>
          </div>

          <div className="header__top__right">
            <div>
              <button>EN</button>
              <button>USD</button>
              <BedtimeIcon />
              <button className="sub_btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="header__container_line">
        <div className="header__bottom">
          <div className="header__bottom__BtnsL">
            <img
              src="https://www.daytrading.com/wp-content/uploads/2021/08/CoinGecko-Logo-Big.png"
              onClick={() => navigate(`/`)}
            />
            <p
              onMouseEnter={() => {
                setExCMenu(false);
                setCryptoMenu(true);
                setNftMenu(false);
                setLearnMenu(false);
              }}
            >
              Cryptocurrencies
            </p>
            <p
              onMouseEnter={() => {
                setExCMenu(true);
                setCryptoMenu(false);
                setNftMenu(false);
                setLearnMenu(false);
              }}
            >
              Exchanges
            </p>
            <p
              onMouseEnter={() => {
                setExCMenu(false);
                setCryptoMenu(false);
                setNftMenu(true);
                setLearnMenu(false);
              }}
            >
              NFT
            </p>
            <p
              onMouseEnter={() => {
                setExCMenu(false);
                setCryptoMenu(false);
                setNftMenu(false);
                setLearnMenu(true);
              }}
            >
              Learn Crypto
            </p>
            <p>Products</p>
          </div>

          <div className="header__bottom__BtnsR">
            <p>Portfolio</p>
            <p>US</p>
            <div>
              <p>Search</p>
            </div>
          </div>
        </div>

        {cryptoMenu && (
          <div onMouseLeave={() => setCryptoMenu(false)}>
            <CryptoMenu />
          </div>
        )}
        {exCMenu && (
          <div onMouseLeave={() => setExCMenu(false)}>
            <Exchanges />
          </div>
        )}

        {nftMenu && (
          <div onMouseLeave={() => setNftMenu(false)}>
            <NFT />
          </div>
        )}

        {learnMenu && (
          <div onMouseLeave={() => setLearnMenu(false)}>
            <LearnCrypto />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
