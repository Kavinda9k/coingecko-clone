import { useEffect, useState } from "react";
import CoinPriceChart from "./CoinPriceChart";
import { IProps, IChartCoinDataXY } from "../../../types/coinGecko.interface";
import CoinInfoVotes from "./CoinInfoVotes";

const PriceChartContainer = ({ coinName, coinInfo }: IProps) => {
  const [chartData, setChartData] = useState<IChartCoinDataXY[]>([[0, 0]]);

  const getChartData = async (coinName: string) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=91`
    );

    const responseJson = await response.json();
    const resPrices = responseJson.prices;

    setChartData(resPrices);
  };

  useEffect(() => {
    typeof coinName === "string" && getChartData(coinName);
  }, []);

  return (
    <div className="coinInfo__chart_containerL">
      <h2>
        {coinInfo?.name} price chart ({coinInfo?.symbol}/USD)
      </h2>
      <h5>Last updated 07:41AM UTC. Currency in USD.</h5>
      <div className="coinInfo__chart_graphBtns">
        <div>
          <button>Price</button>
          <button>Market Cap</button>
          <button>Trading View</button>
        </div>

        <div>
          <button>24h</button>
          <button>7h</button>
          <button>14d</button>
          <button>90d</button>
          <button>1y</button>
          <button>Max</button>
        </div>
      </div>
      <div className="coinInfo__chart_graph">
        <CoinPriceChart priceData={chartData} />
      </div>

      <div className="pricePercentageChanged__container">
        <table>
          <tr>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>14d</th>
            <th>30d</th>
            <th>1y</th>
          </tr>
          <tr>
            <td>-0.1%</td>
            <td>2.7%</td>
            <td>-13.5%</td>
            <td>-2.4%</td>
            <td>-8.8%</td>
            <td>-59.2%</td>
          </tr>
        </table>
      </div>

      <CoinInfoVotes />
    </div>
  );
};

export default PriceChartContainer;
