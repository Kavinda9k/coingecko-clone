import { useEffect, useState } from "react";
import CoinPriceChart from "./CoinPriceChart";
import { IProps, IChartCoinDataXY } from "../../../types/provider.interface";

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
      <h1>
        {coinInfo?.name} price chart ({coinInfo?.symbol}/USD)
      </h1>
      <h5>Last updated 07:41AM UTC. Currency in USD.</h5>
      <div className="coinInfo__chart_graphBtns">
        <div>
          <button className="coinInfo__chart_graphBtns_L">Price</button>
          <button className="coinInfo__chart_graphBtns_mid">Market Cap</button>
          <button className="coinInfo__chart_graphBtns_R">Trading View</button>
        </div>

        <div>
          <button className="coinInfo__chart_graphBtns_L">24h</button>
          <button className="coinInfo__chart_graphBtns_mid">7h</button>
          <button className="coinInfo__chart_graphBtns_mid">14d</button>
          <button className="coinInfo__chart_graphBtns_mid">90d</button>
          <button className="coinInfo__chart_graphBtns_mid">1y</button>
          <button className="coinInfo__chart_graphBtns_R">Max</button>
        </div>
      </div>
      <div className="coinInfo__chart_graph">
        <CoinPriceChart priceData={chartData} />
      </div>
    </div>
  );
};

export default PriceChartContainer;
