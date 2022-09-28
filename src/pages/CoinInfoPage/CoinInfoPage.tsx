import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICoinSpecificData, INameProp } from "../../types/coinGecko.interface";
import { useAllCoinGeckoData } from "../../Context/CoinGeckoApiDataProvider";
import "../../css/CoinInfoPage.css";

//Page Components
import CoinStatsContainer from "./components/CoinStatsContainer";
import CoinLinksContainer from "./components/CoinLinksContainer";
import ConverterSubPage from "./subpages/ConverterSubPage";
import TradingMarketsTable from "./components/TradingMarketsTable";
import OverviewSubPage from "./subpages/OverviewSubPage";

const CoinInfoPage = () => {
  const [count, setCount] = useState(0);
  const { coinId } = useParams();
  const allCoins = useAllCoinGeckoData();

  const [coinInfoChartBtnName, setCoinInfoChartBtnName] = useState("General");
  const [subPageName, setSubPageName] = useState("Overview");
  const [coinSpecificData, setCoinSpecificData] = useState<ICoinSpecificData>();

  useEffect(() => {
    if (typeof coinId === "string") {
      allCoins?.getCoinSpecificData(coinId);
      setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }, [coinId]);

  useEffect(() => {
    setCoinSpecificData(allCoins?.coinSpecificData);
  }, [count]);

  const CoinInfoChartBtn = ({ name }: INameProp) => {
    return (
      <button
        className={
          coinInfoChartBtnName === name
            ? "coinInfo__chart_container__btnsSelected"
            : ""
        }
        onClick={() => setCoinInfoChartBtnName(name)}
      >
        {name}
      </button>
    );
  };

  const CoinInfoMainBtn = ({ name }: INameProp) => {
    return (
      <p
        className={subPageName === name ? "mainBtnSelected" : ""}
        onClick={() => setSubPageName(name)}
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

      {(() => {
        switch (subPageName) {
          case "Overview":
            return (
              <OverviewSubPage coinName={coinId} coinInfo={coinSpecificData} />
            );
          case "Markets":
            return (
              <div>
                <TradingMarketsTable coinInfo={coinSpecificData} />
              </div>
            );

          case "Converter":
            return (
              <div className="converterSection__container">
                <ConverterSubPage
                  coinName={coinId}
                  coinInfo={coinSpecificData}
                />
              </div>
            );

          default:
            return (
              <OverviewSubPage coinName={coinId} coinInfo={coinSpecificData} />
            );
        }
      })()}
    </div>
  );
};

export default CoinInfoPage;
