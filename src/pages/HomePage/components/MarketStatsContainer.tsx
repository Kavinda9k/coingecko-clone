import "../../../css/Home.css";
import { useAllCoinGeckoData } from "../../../Context/CoinGeckoApiDataProvider";

const MarketStatsContainer = () => {
  const allCoinsData = useAllCoinGeckoData();
  const getGlobalCoinData = allCoinsData?.globalCoinData?.data;

  return (
    <div className="marketStats__cards">
      <div>
        <h3>
          ${getGlobalCoinData?.total_market_cap.usd.toLocaleString("en-US")}
        </h3>
        <p>Market Capitalization</p>
      </div>
      <div>
        <h3>${getGlobalCoinData?.total_volume.usd.toLocaleString("en-US")}</h3>
        <p>24h Trading Volume</p>
      </div>
      <div className="greyCard">
        <h3>
          {getGlobalCoinData?.market_cap_percentage.btc.toLocaleString("en-US")}
          %
        </h3>
        <p>Bitcoin Market Cap Dominance</p>
      </div>
      <div className="greyCard">
        <h3>{getGlobalCoinData?.active_cryptocurrencies}</h3>
        <p># of Coins</p>
      </div>
    </div>
  );
};

export default MarketStatsContainer;
