import "../../../css/TrendingCoins.css";
import "../../../css/CoinInfo.css";

import { IProps } from "../../../types/coinGecko.interface";

const TrendingCoinsContainer = ({ trendingCoins }: IProps) => {
  const renderCards = trendingCoins?.map((coin) => {
    const id = coin.item.coin_id;
    return (
      <div className="trending__card">
        <div>
          <img src={coin.item.small} />
          <div>
            <p>{coin.item.name}</p>
            <h5>${coin.item.price_btc * 21000}</h5>
          </div>
          <p></p>
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

export default TrendingCoinsContainer;
