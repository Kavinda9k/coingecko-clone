import React, { useState } from "react";
import TrendingCoinsContainer from "../../Components/TrendingCoinsContainer";
import { IProps, INameProp } from "../../types/coinGecko.interface";
import PriceChartContainer from "./components/PriceChartContainer";
import { useAllCoinGeckoData } from "../../Context/CoinGeckoApiDataProvider";
import "../../css/ConverterSection.css";
import Calculator from "./components/Calculator";

const ConverterSection = ({ coinName, coinInfo }: IProps) => {
  const allCoins = useAllCoinGeckoData();
  const [values, setValues] = useState([
    0.01, 0.1, 1, 2, 5, 10, 20, 50, 100, 1000,
  ]);

  const RenderTable = ({ name }: INameProp) => {
    const oneUsdValue = 0.00076427;
    return (
      <table className="priceComparisonTables__tbale">
        <tr>
          {name === "USD" ? <th>USD</th> : <th>ETH</th>}
          {name === "USD" ? <th>ETH</th> : <th>USD</th>}
        </tr>

        {values.map((value) => (
          <tr>
            <td>
              {value}
              {name === "USD" ? " USD" : " ETH"}
            </td>
            <td>
              {name === "USD"
                ? `${(value * oneUsdValue).toFixed(8)} ETH`
                : `${(value / oneUsdValue).toFixed(2)} USD`}
            </td>
          </tr>
        ))}
      </table>
    );
  };

  return (
    <div>
      <h1>
        {coinInfo?.name} Price in USD: Convert {coinInfo?.symbol} to USD
      </h1>
      <div>
        <Calculator coinInfo={coinInfo} />
      </div>
      <PriceChartContainer coinName={coinName} coinInfo={coinInfo} />
      <div className="converterSection__description">
        <h3>Where can I buy and sell Ethereum?</h3>
        <p>
          Ethereum has a global 24-hour trading volume of $12,951,486,245.
          Ethereum can be traded across 577 different markets and is most
          actively traded in WhiteBIT.
        </p>

        <h3>7-day price history of Ethereum (ETH) to USD</h3>
        <p>Compare the price & changes of Ethereum in USD for the week.</p>
      </div>

      <div className="priceComparisonTables">
        <div>
          <h2>Convert Ethereum (ETH) to USD</h2>
          <RenderTable name="RETH" />
        </div>
        <div>
          <h2>Convert US Dollar (USD) to ETH</h2>
          <RenderTable name="USD" />
        </div>
      </div>
      <TrendingCoinsContainer trendingCoins={allCoins?.trendingCoins} />
    </div>
  );
};

export default ConverterSection;
