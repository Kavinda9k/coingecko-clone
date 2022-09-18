import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCoinSpecificData } from "../../Context/CoinSpecificDataProvider";
import "../../css/CoinInfo.css";

import { ICoinSpecificData } from "../../types/provider.interface";

//Page Components
import CoinStatsContainer from "./components/CoinStatsContainer";
import CoinLinksContainer from "./components/CoinLinksContainer";
import PriceChartContainer from "./components/PriceChartContainer";
import CurrenyConverter from "./components/CurrenyConverter";
import TrendingCoinsContainer from "./components/TrendingCoinsContainer";
import NewsContainer from "./components/NewsContainer";

const CoinInfoPage = () => {
  const { id } = useParams();
  const coin = useCoinSpecificData();

  useEffect(() => {
    if (typeof id === "string") {
      coin.getNewCoinData?.(id);
    }
  }, [id]);

  useEffect(() => {
    setCoinSpecificData(coin.coinSpecificData);
  });

  const [coinSpecificData, setCoinSpecificData] = useState<ICoinSpecificData>();

  return (
    <div className="coinInfo__container__main">
      <div className="coinInfo__container">
        <div className="coinInfo__coinNames">
          <p>
            Coins:
            <span> {coinSpecificData?.name}</span>
          </p>
        </div>

        <div className="coinInfo__stats_container">
          <CoinStatsContainer coinInfo={coinSpecificData} />
          <CoinLinksContainer coinInfo={coinSpecificData} />
        </div>
      </div>

      <div className="coinInfo__mainBtns_container">
        <p>Overview</p>
        <p>Markets</p>
        <p>Converter</p>
        <p>Historical Data</p>
        <p>Tokenomics</p>
      </div>

      <div className="coinInfo__chart_container">
        {typeof id === "string" ? (
          <PriceChartContainer coinName={id} coinInfo={coinSpecificData} />
        ) : (
          <div></div>
        )}
        <CurrenyConverter coinInfo={coinSpecificData} />
      </div>

      <div className="coinInfo__trendingCoinsContainer">
        <TrendingCoinsContainer />
      </div>

      <div className="coinInfo__NewsContainer">
        {typeof id === "string" ? <NewsContainer coinName={id} /> : <div></div>}
      </div>
    </div>
  );
};

export default CoinInfoPage;