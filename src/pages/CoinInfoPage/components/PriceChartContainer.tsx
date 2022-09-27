import { useEffect, useState } from "react";
import {
  IProps,
  IChartCoinDataXY,
  INameProp,
} from "../../../types/coinGecko.interface";
import CoinInfoVotes from "./CoinInfoVotes";
import PriceChart from "./PriceChart";

const PriceChartContainer = ({ coinName, coinInfo }: IProps) => {
  const [chartData, setChartData] = useState<IChartCoinDataXY[]>([[0, 0]]);
  const [timeframe, setTimeFrame] = useState(91);
  const [chartTimeBtn, setChartTimeBtn] = useState("24h");
  const [chartCategoryBtn, setChartCategoryBtn] = useState("Price");

  const priceData = coinInfo?.market_data;

  const getChartData = async (coinName: string) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${timeframe}`
    );

    const responseJson = await response.json();
    const resPrices = responseJson.prices;

    setChartData(resPrices);
  };

  useEffect(() => {
    typeof coinName === "string" && getChartData(coinName);
  }, [timeframe]);

  const RenderChartCategoryBtn = ({ name }: INameProp) => {
    return (
      <button
        className={
          chartCategoryBtn === name ? "coinInfo__chart_graphBtns__selected" : ""
        }
        onClick={() => {
          setChartCategoryBtn(name);
        }}
      >
        {name}
      </button>
    );
  };

  const RenderChartTimeBtn = ({ name }: INameProp) => {
    return (
      <button
        onClick={() => {
          setChartTimeBtn(`${name}d`);
          setTimeFrame(name === "24" ? 1 : Number(name));
        }}
        className={
          chartTimeBtn === `${name}d` || chartTimeBtn === `${name}h`
            ? "coinInfo__chart_graphBtns__selected"
            : ""
        }
      >
        {name === "24" ? `${name}h` : `${name}d`}
      </button>
    );
  };

  return (
    <div className="coinInfo__chart_containerL">
      <h2>
        {coinInfo?.name} price chart ({coinInfo?.symbol}/USD)
      </h2>
      <h5>Last updated 07:41AM UTC. Currency in USD.</h5>
      <div className="coinInfo__chart_graphBtns">
        <div>
          <RenderChartCategoryBtn name="Price" />
          <RenderChartCategoryBtn name="Market Cap" />
          <RenderChartCategoryBtn name="Trading View" />
        </div>

        <div>
          <RenderChartTimeBtn name="24" />
          <RenderChartTimeBtn name="7" />
          <RenderChartTimeBtn name="14" />
          <RenderChartTimeBtn name="30" />
          <RenderChartTimeBtn name="90" />
          <RenderChartTimeBtn name="180" />
          <RenderChartTimeBtn name="365" />
        </div>
      </div>
      <div className="coinInfo__chart_graph">
        <PriceChart priceData={chartData} />
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
            <td>
              {priceData?.price_change_percentage_1h_in_currency.usd.toFixed(2)}
              %
            </td>
            <td>{priceData?.price_change_percentage_24h.toFixed(2)}%</td>
            <td>
              {priceData?.price_change_percentage_7d_in_currency.usd.toFixed(2)}
              %
            </td>
            <td>
              {priceData?.price_change_percentage_14d_in_currency.usd.toFixed(
                2
              )}
              %
            </td>
            <td>
              {priceData?.price_change_percentage_30d_in_currency.usd.toFixed(
                2
              )}
              %
            </td>
            <td>
              {priceData?.price_change_percentage_1y_in_currency.usd.toFixed(2)}
              %
            </td>
          </tr>
        </table>
      </div>

      <CoinInfoVotes />
    </div>
  );
};

export default PriceChartContainer;
