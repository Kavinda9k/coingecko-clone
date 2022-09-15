import React from "react";
import "../css/Header.css";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import CryptoMenu from "../Components/CryptoMenu";
import Exchanges from "../Components/Exchanges";
import NFT from "../Components/NFT";
import LearnCrypto from "../Components/LearnCrypto";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme } from "../Context/ThemeContext";

const Header = () => {
  const [cryptoMenu, setCryptoMenu] = React.useState(false);
  const [exCMenu, setExCMenu] = React.useState(false);
  const [nftMenu, setNftMenu] = React.useState(false);
  const [learnMenu, setLearnMenu] = React.useState(false);

  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <div className="header__container">
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
          <button className={theme.isDarkMode ? "darkTopBtn" : ""}>EN</button>
          <button className={theme.isDarkMode ? "darkTopBtn" : ""}>USD</button>
          {theme.isDarkMode ? (
            <WbSunnyIcon onClick={() => theme.changeTheme?.()} />
          ) : (
            <BedtimeIcon onClick={() => theme.changeTheme?.()} />
          )}
          <button className="sub_btn">Subscribe</button>
        </div>
      </div>

      <div className="header__bottom">
        <div className="header__bottom__BtnsL">
          {theme.isDarkMode ? (
            <img
              src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"
              onClick={() => navigate(`/`)}
            />
          ) : (
            <img
              src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
              onClick={() => navigate(`/`)}
            />
          )}

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

      <div className="header__bottom__BtnsL__smallScreen">
        <div className="hamburger__menu">
          <MenuRoundedIcon />
        </div>
        <img
          src="https://www.daytrading.com/wp-content/uploads/2021/08/CoinGecko-Logo-Big.png"
          onClick={() => navigate(`/`)}
        />
        <div className="header__bottom__BtnsL__smallScreen__btnsRight">
          <img src="https://static.coingecko.com/s/candy_notification_web-a560ca6de9e0daaeb05eb6fe3dae7062684f63249dbf371568e7b062a3456e3e.png" />
          <BookmarkRoundedIcon />
          <PersonRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
