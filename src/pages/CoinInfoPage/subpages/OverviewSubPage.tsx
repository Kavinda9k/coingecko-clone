import "../../../css/CoinInfoPage.css";
import PriceChartContainer from "../components/PriceChartContainer";
import CurrencyStatsContainer from "../components/CurrencyStatsContainer";
import TrendingCoinsContainer from "../../../Components/TrendingCoinsContainer";
import NewsContainer from "../components/NewsContainer";
import CoinDescription from "../components/CoinDescription";
import TradingMarketsTable from "../components/TradingMarketsTable";
import { IProps } from "../../../types/coinGecko.interface";
import { useAllCoinGeckoData } from "../../../Context/CoinGeckoApiDataProvider";

function OverviewSubPage({ coinName, coinInfo }: IProps) {
  const allCoins = useAllCoinGeckoData();
  return (
    <div>
      <div className="coinInfo__chart_container">
        {typeof coinName === "string" ? (
          <PriceChartContainer coinName={coinName} coinInfo={coinInfo} />
        ) : (
          <div></div>
        )}
        <CurrencyStatsContainer
          coinInfo={coinInfo}
          allCoinsArr={allCoins?.allCoinsData}
        />
      </div>

      <div className="coinInfo__DescriptionContainer">
        <CoinDescription coinInfo={coinInfo} />
      </div>

      <div>
        <TradingMarketsTable coinInfo={coinInfo} marketTablesize="small" />
      </div>

      <div className="coinInfo__NewsContainer">
        {typeof coinName === "string" ? (
          <NewsContainer coinName={coinName} />
        ) : (
          <div></div>
        )}
      </div>

      <div className="coinInfo__trendingCoinsContainer">
        <TrendingCoinsContainer trendingCoins={allCoins?.trendingCoinsData} />
      </div>
    </div>
  );
}

export default OverviewSubPage;
