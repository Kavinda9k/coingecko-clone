import "../../../css/Table.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../Context/ThemeProvider";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { useAllCoinGeckoData } from "../../../Context/CoinGeckoApiDataProvider";

const Table = () => {
  const navigate = useNavigate();
  const allCoins = useAllCoinGeckoData();
  const theme = useTheme();

  const renderTable = allCoins?.allCoinsData.map((coin) => {
    return (
      <tr onClick={() => navigate(`/coin/${coin.id}`)}>
        <td className="coin__id">
          <div>
            <div
              className={theme.isDarkMode ? "star__btnDark" : "star__btnLight"}
            >
              <StarBorderRoundedIcon />
            </div>
            {coin.rank}
          </div>
        </td>
        <td className="coin__name">
          <div>
            <img src={coin.image} className="coin__logo" />
            {coin.id.charAt(0).toLocaleUpperCase() + coin.id.slice(1)}
          </div>
        </td>
        <td></td>
        <td className="symbol__name">{coin.symbol.toLocaleUpperCase()}</td>
        <td>${coin.current_price}</td>
        <td>
          {coin.price_change_percentage_24h < 0 ? (
            <div className="negative_number">
              {coin.price_change_percentage_24h}%
            </div>
          ) : (
            <div className="positve_number">
              {coin.price_change_percentage_24h}%
            </div>
          )}
        </td>
        <td>
          {coin.price_change_percentage_24h < 0 ? (
            <div className="negative_number">
              {coin.price_change_percentage_24h}%
            </div>
          ) : (
            <div className="positve_number">
              {coin.price_change_percentage_24h}%
            </div>
          )}
        </td>
        <td>
          {coin.price_change_percentage_24h < 0 ? (
            <div className="negative_number">
              {coin.price_change_percentage_24h}%
            </div>
          ) : (
            <div className="positve_number">
              {coin.price_change_percentage_24h}%
            </div>
          )}
        </td>
        <td>{coin.total_volume}</td>
        <td>{coin.market_cap}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="table__container">
        <table>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th></th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>Supply</th>
            <th>Mkt Cap</th>
          </tr>
          {renderTable}
        </table>
      </div>
    </div>
  );
};

export default Table;
