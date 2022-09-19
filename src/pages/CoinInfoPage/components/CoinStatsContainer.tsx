import { IProps } from "../../../types/coinGecko.interface";
import "../../../css/CoinInfo.css";

const CoinStatsContainer = ({ coinInfo }: IProps) => {
  return (
    <div className="coinInfo__stats_containerL">
      <div className="coinInfo__stats_containerL__Top">
        <p className="rank">Rank #{coinInfo?.market_cap_rank}</p>
        <div className="coinInfo__stats_containerL__Top__name">
          <img src={coinInfo?.image.small} />
          <h3>{`${
            coinInfo?.name
          } (${coinInfo?.symbol?.toLocaleUpperCase()})`}</h3>
        </div>
        <div className="coinInfo__stats_containerL__Top__pirce">
          <h1>
            ${coinInfo?.market_data.current_price.usd?.toLocaleString("en-US")}
          </h1>
          <h4>{coinInfo?.market_data.price_change_percentage_24h}%</h4>
        </div>
        <p className="rank__Deci">1.000000 BTC</p>
        <div>
          <button>SH</button>
          <button>BE</button>
          <button>ST</button>
        </div>
      </div>

      <div className="coinInfo__stats_containerL__Bottom">
        <div>
          <div>
            <p>Market Cap</p>
            <p>
              ${coinInfo?.market_data.market_cap.usd?.toLocaleString("en-US")}
            </p>
          </div>
          <div>
            <p>24 Hour Trading Volume</p>
            <p>
              ${coinInfo?.market_data.total_volume.usd.toLocaleString("en-US")}
            </p>
          </div>
          <div>
            <p>Market Cap Change (24h)</p>
            <p>
              $
              {coinInfo?.market_data.market_cap_change_24h?.toLocaleString(
                "en-US"
              )}
            </p>
          </div>
        </div>

        <div>
          <div>
            <p>Circulating Supply</p>
            <p>
              $
              {coinInfo?.market_data.circulating_supply?.toLocaleString(
                "en-US"
              )}
            </p>
          </div>
          <div>
            <p>Total Supply</p>
            <p>
              ${coinInfo?.market_data.total_supply?.toLocaleString("en-US")}
            </p>
          </div>
          <div>
            <p>Max Supply</p>
            <p>${coinInfo?.market_data.max_supply?.toLocaleString("en-US")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinStatsContainer;
