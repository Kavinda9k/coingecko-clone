import { IProps } from "../../../types/coinGecko.interface";
import Calculator from "./Calculator";

const CurrenyConverter = ({ coinInfo, allCoinsArr }: IProps) => {
  const top5Coins = allCoinsArr?.slice(0, 6);

  const renderTopCoins = top5Coins?.map((coin) => (
    <div>
      <img src={coin.image} />
      <p>{coin.name}</p>
    </div>
  ));

  return (
    <div className="coinInfo__chart_containerR">
      <Calculator coinInfo={coinInfo} />

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

export default CurrenyConverter;
