import { useState } from "react";
import { IProps, INameProp } from "../../types/coinGecko.interface";
import PriceChartContainer from "./components/PriceChartContainer";
import { useAllCoinGeckoData } from "../../Context/CoinGeckoApiDataProvider";
import TrendingCoinsContainer from "../../Components/TrendingCoinsContainer";
import Calculator from "./components/Calculator";
import "../../css/ConverterSection.css";

const ConverterSection = ({ coinName, coinInfo }: IProps) => {
  const allCoinsData = useAllCoinGeckoData();
  const [values] = useState([0.01, 0.1, 1, 2, 5, 10, 20, 50, 100, 1000]);

  const RenderConversionTable = ({ name }: INameProp) => {
    const currentPrice = coinInfo?.market_data.current_price.usd;

    return (
      <table className="priceComparisonTables__tbale">
        <tr>
          {name === "USD" ? <th>USD</th> : <th>{name.toLocaleUpperCase()}</th>}
          {name === "USD" ? (
            <th>{coinInfo?.symbol.toLocaleUpperCase()}</th>
          ) : (
            <th>USD</th>
          )}
        </tr>

        {values.map((value) => (
          <tr>
            <td>
              {value}
              {name === "USD" ? " USD" : ` ${name.toLocaleUpperCase()}`}
            </td>
            <td>
              {currentPrice &&
                (name === "USD"
                  ? `${(value / currentPrice).toFixed(
                      8
                    )} ${coinInfo?.symbol.toLocaleUpperCase()}`
                  : `${(value * currentPrice).toFixed(2)} USD`)}
            </td>
          </tr>
        ))}
      </table>
    );
  };

  return (
    <div>
      <h2>
        {coinInfo?.name} Price in USD: Convert{" "}
        {coinInfo?.symbol.toLocaleUpperCase()} to USD
      </h2>
      <div>
        <Calculator coinInfo={coinInfo} size="large" />
      </div>
      <PriceChartContainer coinName={coinName} coinInfo={coinInfo} />
      <div className="converterSection__description">
        <h3>Where can I buy and sell {coinInfo?.name}?</h3>
        <p>
          {coinInfo?.name} has a global 24-hour trading volume of $
          {coinInfo?.market_data.total_volume.usd?.toLocaleString("en-US")}.{" "}
          {coinInfo?.name} can be traded across 577 different markets and is
          most actively traded in WhiteBIT.
        </p>

        <h3>
          7-day price history of {coinInfo?.name} (
          {coinInfo?.symbol.toLocaleUpperCase()}) to USD
        </h3>
        <p>
          Compare the price & changes of {coinInfo?.name} in USD for the week.
        </p>
      </div>

      <div className="priceComparisonTables">
        <div>
          <h2>
            Convert {coinInfo?.name} ({coinInfo?.symbol.toLocaleUpperCase()}) to
            USD
          </h2>
          <RenderConversionTable name={coinInfo ? coinInfo?.symbol : "BTC"} />
        </div>
        <div>
          <h2>Convert US Dollar (USD) to ETH</h2>
          <RenderConversionTable name="USD" />
        </div>
      </div>
      <TrendingCoinsContainer trendingCoins={allCoinsData?.trendingCoins} />
    </div>
  );
};

export default ConverterSection;
