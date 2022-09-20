import { IProps } from "../../../types/coinGecko.interface";
import "../../../css/MarketTable.css";

const MarketTable = ({ coinInfo }: IProps) => {
  const top5MarketData = coinInfo?.tickers.slice(0, 6);

  const renderTableData =
    top5MarketData &&
    top5MarketData.map((data, i) => {
      return (
        <tr>
          <td>{i}</td>
          <td className="marketTable__blue">{data.market.name}</td>
          <td className="marketTable__blue">
            {data.base}/{data.target}
          </td>
          <td>${data.last.toLocaleString("en-US")}</td>
          <td>{data.bid_ask_spread_percentage}%</td>
          <td>${data.converted_last.usd}</td>
          <td>${data.converted_last.usd}</td>
          <td>${data.converted_volume.usd}</td>
          <td>{data.volume.toLocaleString("en-US")}%</td>
          <td>Recently</td>
          <td>{data.trust_score}</td>
        </tr>
      );
    });
  return (
    <div className="marketTable__container">
      <h1>Bitcoin Markets</h1>
      <p>
        <a>Affiliate disclosures</a>
      </p>
      <table>
        <tr>
          <th>#</th>
          <th>Exchange</th>
          <th>Pair</th>
          <th>Price</th>
          <th>Spread</th>
          <th>+2% Depth</th>
          <th>-2% Depth</th>
          <th>24h Volume</th>
          <th>Volume %</th>
          <th>Last Traded</th>
          <th>Trust Score</th>
        </tr>

        {renderTableData}
      </table>
      <p>* Anomaly - Trading price is an outlier against the average</p>
      <p>** Inactive - No trades in the last 3 hours</p>
      <div>
        <button>See All Trading Pairs</button>
      </div>
    </div>
  );
};

export default MarketTable;
