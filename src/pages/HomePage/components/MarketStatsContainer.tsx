import React from "react";
import "../../../css/Home.css";
import { useAllCoinGeckoData } from "../../../Context/CoinGeckoApiDataProvider";

function MarketStatsContainer() {
  const allCoins = useAllCoinGeckoData();

  return (
    <div className="marketStats__cards">
      <div>
        <h3>
          $
          {allCoins?.getGlobalCoinData?.data?.total_market_cap.usd.toLocaleString(
            "en-US"
          )}
        </h3>
        <p>Market Capitalization</p>
      </div>
      <div>
        <h3>
          $
          {allCoins?.getGlobalCoinData?.data?.total_volume.usd.toLocaleString(
            "en-US"
          )}
        </h3>
        <p>24h Trading Volume</p>
      </div>
      <div className="greyCard">
        <h3>
          {allCoins?.getGlobalCoinData?.data?.market_cap_percentage.btc.toLocaleString(
            "en-US"
          )}
          %
        </h3>
        <p>Bitcoin Market Cap Dominance</p>
      </div>
      <div className="greyCard">
        <h3>{allCoins?.getGlobalCoinData?.data?.active_cryptocurrencies}</h3>
        <p># of Coins</p>
      </div>
    </div>
  );
}

export default MarketStatsContainer;
