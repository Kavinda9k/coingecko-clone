import React from "react";
import { IProps } from "../../../types/coinGecko.interface";

function Calculator({ coinInfo }: IProps) {
  const [usdValue, setUsdValue] = React.useState<number | undefined>();
  const [cryptoValue, setCryptoValue] = React.useState<number | undefined>();

  const convertToUSd = (num: number) => {
    setCryptoValue(undefined);
    if (coinInfo?.market_data.current_price.usd) {
      setUsdValue(num * coinInfo?.market_data.current_price.usd);
    } else {
      setUsdValue(num * 0);
    }
  };

  const convertToCrypto = (num: number) => {
    setUsdValue(undefined);
    if (coinInfo?.market_data.current_price.usd) {
      setCryptoValue(num / coinInfo?.market_data.current_price.usd);
    } else {
      setUsdValue(num * 0);
    }
  };

  return (
    <div className="coinInfo__chart_containerR__converter">
      <h2>Convert {coinInfo?.symbol.toLocaleUpperCase()} to USD</h2>
      <div>
        <div>
          <p>{coinInfo?.symbol.toLocaleUpperCase()}</p>
        </div>
        <input
          type="number"
          value={cryptoValue}
          onChange={(e) => convertToUSd(Number(e.target.value))}
        />
      </div>
      <div>
        <div>
          <p>USD</p>
        </div>
        <input
          type="number"
          value={usdValue}
          onChange={(e) => convertToCrypto(Number(e.target.value))}
        />
      </div>
      <p>
        1 {coinInfo?.symbol.toLocaleUpperCase()} = $
        {coinInfo?.market_data.current_price.usd}
      </p>
    </div>
  );
}

export default Calculator;
