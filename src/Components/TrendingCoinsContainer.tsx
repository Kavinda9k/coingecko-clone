import "../css/TrendingCoins.css";
import "../css/CoinInfoPage.css";
import { ITrendingCoinData } from "../types/coinGecko.interface";

import { IProps } from "../types/coinGecko.interface";

const TrendingCoinsContainer = ({ trendingCoins }: IProps) => {
  const trendingCoinBtns: ITrendingCoinData[] = [
    {
      item: {
        coin_id: 8,
        id: "more_coins",
        small:
          "https://static.coingecko.com/s/more_coins_bg_image-0a368fca5478fcab5133f19ab08675800bf7b916db394f865b590a82e649a0a4.png",
        price_btc: 0,
        btnName: "More Coins",
      },
    },
    {
      item: {
        coin_id: 9,
        id: "more_coins",
        small:
          "https://static.coingecko.com/s/recently_added_bg-5d0819d31cca2c427e7633bb5ef933896813d8d65f78e7d0fc9fc0b5d77fa045.png",
        price_btc: 0,
        btnName: "Top Categories",
      },
    },
    {
      item: {
        coin_id: 10,
        id: "more_coins",
        small:
          "https://static.coingecko.com/s/top_categories_bg-6972db9c971f4682ce537a14f6b27eee5bcd43e64da9b7d039d539a3936c0075.png",
        price_btc: 0,
        btnName: "Recently Added",
      },
    },
  ];

  const trendingCoinArr = trendingCoins?.concat(trendingCoinBtns);

  const renderCards =
    trendingCoinArr &&
    trendingCoinArr.map((coin) => {
      const id = coin.item.coin_id;
      return (
        <div
          className={
            coin.item.id === "more_coins"
              ? "trending__cardIMG"
              : "trending__card"
          }
        >
          {coin.item.id === "more_coins" ? (
            <div className="trending__cardBtn__container">
              <p>{coin.item.btnName}</p>
              <img src={coin.item.small} />
            </div>
          ) : (
            <div>
              <div>
                <img src={coin.item.small} />
                <div>
                  <p>{coin.item.name}</p>
                  <h5>${(coin.item.price_btc * 21000).toFixed(8)}</h5>
                </div>
              </div>
              <img src={`https://www.coingecko.com/coins/${id}/sparkline`} />
            </div>
          )}
        </div>
      );
    });

  return (
    <div className="trending__main">
      <h2>Trending Coins</h2>

      <div className="trendingCard__container">{renderCards}</div>
    </div>
  );
};

export default TrendingCoinsContainer;
