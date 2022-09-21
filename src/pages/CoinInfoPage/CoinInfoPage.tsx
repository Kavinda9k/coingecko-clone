import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/CoinInfoPage.css";

import { ICoinSpecificData } from "../../types/coinGecko.interface";

//Page Components
import CoinStatsContainer from "./components/CoinStatsContainer";
import CoinLinksContainer from "./components/CoinLinksContainer";
import PriceChartContainer from "./components/PriceChartContainer";
import CurrenyConverter from "./components/CurrenyConverter";
import TrendingCoinsContainer from "./components/TrendingCoinsContainer";
import NewsContainer from "./components/NewsContainer";

import { useAllCoinGeckoData } from "../../Context/CoinGeckoApiDataProvider";
import CoinDescription from "./components/CoinDescription";
import MarketTable from "./components/MarketTable";

const CoinInfoPage = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const allCoins = useAllCoinGeckoData();

  const [selectedBtns, setSelectedBtns] = useState("general");

  useEffect(() => {
    if (typeof id === "string") {
      allCoins?.getCoinSpecificCoinData(id);
      setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }, [id]);

  useEffect(() => {
    setCoinSpecificData(allCoins?.coinSpecificData);
    console.log("render");
  }, [count]);

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

      <div className="coinInfo__chart_container__btns">
        <button
          className={
            selectedBtns === "general"
              ? "coinInfo__chart_container__btnsSelected"
              : ""
          }
          onClick={() => setSelectedBtns("general")}
        >
          General
        </button>
        <button
          className={
            selectedBtns === "social"
              ? "coinInfo__chart_container__btnsSelected"
              : ""
          }
          onClick={() => setSelectedBtns("social")}
        >
          Social
        </button>
        <button
          className={
            selectedBtns === "developer"
              ? "coinInfo__chart_container__btnsSelected"
              : ""
          }
          onClick={() => setSelectedBtns("developer")}
        >
          Developer
        </button>
        <button
          className={
            selectedBtns === "widgets"
              ? "coinInfo__chart_container__btnsSelected"
              : ""
          }
          onClick={() => setSelectedBtns("widgets")}
        >
          Widgets
        </button>
        <button
          className={
            selectedBtns === "analysis"
              ? "coinInfo__chart_container__btnsSelected"
              : ""
          }
          onClick={() => setSelectedBtns("analysis")}
        >
          Analysis
        </button>
      </div>

      <div className="coinInfo__chart_container">
        {typeof id === "string" ? (
          <PriceChartContainer coinName={id} coinInfo={coinSpecificData} />
        ) : (
          <div></div>
        )}
        <CurrenyConverter
          coinInfo={coinSpecificData}
          allCoinsArr={allCoins?.allCoinsData}
        />
      </div>

      <div className="coinInfo__DescriptionContainer">
        <CoinDescription coinInfo={coinSpecificData} />
      </div>

      <div>
        <MarketTable coinInfo={coinSpecificData} />
      </div>

      <div className="coinInfo__NewsContainer">
        {typeof id === "string" ? <NewsContainer coinName={id} /> : <div></div>}
      </div>

      <div className="coinInfo__trendingCoinsContainer">
        <TrendingCoinsContainer trendingCoins={allCoins?.trendingCoins} />
      </div>
    </div>
  );
};

export default CoinInfoPage;
