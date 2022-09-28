import { IProps } from "../../../types/coinGecko.interface";
import CurrencyCalculator from "./CurrencyCalculator";

const CurrencyStatsContainer = ({ coinInfo, allCoinsArr }: IProps) => {
  let athDate = coinInfo?.market_data.ath_date?.usd;
  let athDateFormatted = new Date(
    athDate ? athDate : "2021-11-10T14:24:11.849Z"
  );

  let atlDate = coinInfo?.market_data.atl_date?.usd;
  let atlDateFormatted = new Date(
    atlDate ? atlDate : "2021-11-10T14:24:11.849Z"
  );

  const top5Coins = allCoinsArr?.slice(0, 6);
  const renderTopCoins = top5Coins?.map((coin) => (
    <div>
      <img src={coin.image} />
      <p>{coin.name}</p>
    </div>
  ));

  return (
    <div className="coinInfo__chart_containerR">
      <CurrencyCalculator coinInfo={coinInfo} />

      <div className="coinInfo__chart_containerR__PriceStatistics">
        <h2>{coinInfo?.symbol.toLocaleUpperCase()} Price Statistics</h2>
        <p>{coinInfo?.symbol.toLocaleUpperCase()} Price Today</p>
        <div className="coinInfo__chart_containerR__stats__container">
          <div>
            <p>{coinInfo?.name} Price</p>
            <p className="coinInfo__chart_containerR__Bold">
              $
              {coinInfo?.market_data.current_price.usd?.toLocaleString("en-US")}
            </p>
          </div>

          <div>
            <p>24h Low / 24h High</p>
            <p className="coinInfo__chart_containerR__Bold">
              ${coinInfo?.market_data.low_24h?.usd.toLocaleString("en-US")} /{" "}
              {coinInfo?.market_data.high_24h?.usd.toLocaleString("en-US")}
            </p>
          </div>

          <div>
            <p>7d Low / 7d High</p>
            <p className="coinInfo__chart_containerR__Bold">
              $18,650.25 / $21,707.39
            </p>
          </div>

          <div>
            <p>Trading Volume</p>
            <p className="coinInfo__chart_containerR__Bold">
              $
              {coinInfo?.market_data.market_cap_change_24h?.toLocaleString(
                "en-US"
              )}
            </p>
          </div>

          <div>
            <p>Market Cap Rank</p>
            <p className="coinInfo__chart_containerR__Bold">
              {coinInfo?.market_cap_rank}
            </p>
          </div>

          <div>
            <p>Market Cap</p>
            <p className="coinInfo__chart_containerR__Bold">
              ${coinInfo?.market_data.market_cap.usd?.toLocaleString("en-US")}
            </p>
          </div>

          <div>
            <p>Liquidity Score</p>
            <p className="coinInfo__chart_containerR__Bold">
              {coinInfo?.market_data.liquidity_score}
            </p>
          </div>

          <div>
            <p>Volume</p>
            <p className="coinInfo__chart_containerR__Bold">
              {coinInfo?.market_data.total_volume.usd.toLocaleString("en-US")}
            </p>
          </div>

          <div>
            <p>All-Time High </p>
            <div className="ath_atl_container">
              <p className="coinInfo__chart_containerR__Bold">
                ${coinInfo?.market_data.ath?.usd.toLocaleString("en-US")}
                <span>
                  {" "}
                  {coinInfo?.market_data.ath_change_percentage?.usd.toFixed(1)}%
                </span>
              </p>
              <p className="atl_ath_date">
                {atlDateFormatted.toLocaleDateString("en-US")}
              </p>
            </div>
          </div>

          <div>
            <p>All-Time Low </p>
            <div className="ath_atl_container">
              <p className="coinInfo__chart_containerR__Bold">
                ${coinInfo?.market_data.atl?.usd.toLocaleString("en-US")}
                <span className="ath_percentage">
                  {" "}
                  {coinInfo?.market_data.atl_change_percentage?.usd.toFixed(1)}%
                </span>
              </p>
              <p className="atl_ath_date">
                {athDateFormatted.toLocaleDateString("en-US")}
              </p>
            </div>
          </div>
        </div>

        <div className="topCoins">
          <h4>TOP COINS BY MARKET CAP</h4>
          {renderTopCoins}
          <a>Compare with other coins</a>
        </div>
      </div>
    </div>
  );
};

export default CurrencyStatsContainer;
