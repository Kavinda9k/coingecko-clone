import React from "react";
import "../css/TrendingCoins.css";
import { useTrendingData } from "../Context/TrendingData";

const TrendingCoins = () => {
  const trendingCoins = useTrendingData();

  const renderCards =
    trendingCoins &&
    trendingCoins.map((coin) => {
      const id = coin.item.coin_id;
      return (
        <div className="trending__card">
          <div>
            <img src={coin.item.small} />
            <div>
              <p>{coin.item.name}</p>
              <h5>${coin.item.price_btc}</h5>
            </div>
            <p>15.5%</p>
          </div>

          <img src={`https://www.coingecko.com/coins/${id}/sparkline`} />
        </div>
      );
    });

  return (
    <div className="trending__main">
      <h1>Trending Coins</h1>
      <div className="trendingCard__container">{renderCards}</div>
    </div>
  );
};

export default TrendingCoins;
