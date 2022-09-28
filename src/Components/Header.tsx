import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeProvider";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import "../css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <div className="header__container">
      <div className="header__topCoinatier">
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
            <button className={theme.isDarkMode ? "darkTopBtn" : ""}>
              USD
            </button>
            {theme.isDarkMode ? (
              <WbSunnyIcon onClick={() => theme.toggleTheme?.()} />
            ) : (
              <BedtimeIcon onClick={() => theme.toggleTheme?.()} />
            )}
            <button className="sub_btn">Subscribe</button>
          </div>
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

          <p>Cryptocurrencies</p>
          <p>Exchanges</p>
          <p>NFT</p>
          <p>Learn Crypto</p>
          <p>Products</p>
        </div>

        <div className="header__bottom__BtnsR">
          <img src="https://static.coingecko.com/s/candy_notification_web-a560ca6de9e0daaeb05eb6fe3dae7062684f63249dbf371568e7b062a3456e3e.png" />
          <p>Portfolio</p>
          <p>Login</p>
          <button>Sign Up</button>
          <div>
            <SearchIcon />
            <p>Search</p>
          </div>
        </div>
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
