import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/CoinInfoPage.css";
import { INameProp } from "../../types/coinGecko.interface";

import { ICoinSpecificData } from "../../types/coinGecko.interface";

//Page Components
import CoinStatsContainer from "./components/CoinStatsContainer";
import CoinLinksContainer from "./components/CoinLinksContainer";
import PriceChartContainer from "./components/PriceChartContainer";
import CurrenyConverter from "./components/CurrenyConverter";
import TrendingCoinsContainer from "../../Components/TrendingCoinsContainer";
import NewsContainer from "./components/NewsContainer";
import ConverterSection from "./ConverterSection";

import { useAllCoinGeckoData } from "../../Context/CoinGeckoApiDataProvider";
import CoinDescription from "./components/CoinDescription";
import MarketTable from "./components/TradingMarketsTable";

const CoinInfoPage = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const allCoins = useAllCoinGeckoData();

  const [selectedBtns, setSelectedBtns] = useState("General");
  const [mainBtnType, setMainBtnType] = useState("Overview");
  const [coinSpecificData, setCoinSpecificData] = useState<ICoinSpecificData>();

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

  const CoinInfoChartBtn = ({ name }: INameProp) => {
    return (
      <button
        className={
          selectedBtns === name ? "coinInfo__chart_container__btnsSelected" : ""
        }
        onClick={() => setSelectedBtns(name)}
      >
        {name}
      </button>
    );
  };

  const CoinInfoMainBtn = ({ name }: INameProp) => {
    return (
      <p
        className={mainBtnType === name ? "mainBtnSelected" : ""}
        onClick={() => setMainBtnType(name)}
      >
        {name}
      </p>
    );
  };

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
          {/* <CoinLinksContainer coinInfo={coinSpecificData} /> */}
          <CoinLinksContainer coinInfo={coinSpecificData} />
        </div>
      </div>

      <div className="coinInfo__mainBtns_container">
        <CoinInfoMainBtn name="Overview" />
        <CoinInfoMainBtn name="Markets" />
        <CoinInfoMainBtn name="Converter" />
        <CoinInfoMainBtn name="Historical Data" />
        <CoinInfoMainBtn name="Tokenomics" />
      </div>

      <div className="coinInfo__chart_container__btns">
        <CoinInfoChartBtn name="General" />
        <CoinInfoChartBtn name="Social" />
        <CoinInfoChartBtn name="Developer" />
        <CoinInfoChartBtn name="Widgets" />
        <CoinInfoChartBtn name="Analysis" />
      </div>

      {mainBtnType === "Overview" ? (
        <div>
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
            <MarketTable coinInfo={coinSpecificData} marketTablesize="small" />
          </div>

          <div className="coinInfo__NewsContainer">
            {typeof id === "string" ? (
              <NewsContainer coinName={id} />
            ) : (
              <div></div>
            )}
          </div>

          <div className="coinInfo__trendingCoinsContainer">
            <TrendingCoinsContainer trendingCoins={allCoins?.trendingCoins} />
          </div>
        </div>
      ) : mainBtnType === "Markets" ? (
        <div>
          <MarketTable coinInfo={coinSpecificData} />
        </div>
      ) : (
        <div className="converterSection__container">
          <ConverterSection coinName={id} coinInfo={coinSpecificData} />
        </div>
      )}
    </div>
  );
};

export default CoinInfoPage;
