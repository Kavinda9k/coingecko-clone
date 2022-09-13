import React from "react";
import "../css/CoinInfo.css";
import { useParams } from "react-router-dom";
import TestChart from "./TestChart";
import TrendingCoins from "../Components/TrendingCoins";
import NewsRow from "../Components/NewsRow";

type InewsData = [
  {
    author: string;
  }
];

type Props = {
  newsArticles: InewsData | undefined;
};

interface IassetData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

interface Iasset {
  data: IassetData;
}

type IchartData = [number, number];

const TestCoinInfo = () => {
  const { id } = useParams();

  const [asset, setAsset] = React.useState<Iasset>();

  const [currentCoinValue, setCurrentCoinValue] = React.useState(0);
  const [newsArticles, setNewsArticles] = React.useState<Props | undefined>(
    undefined
  );
  const [convertToUSDValue, setConvertToUSDValue] = React.useState<
    number | undefined
  >();
  const [convertToCryptoValue, setConvertToCryptoValue] = React.useState<
    number | undefined
  >();
  const [charData, setCharData] = React.useState<IchartData[]>([[0, 0]]);

  const getAsset = async (coinName: string) => {
    const response = await fetch(
      `https://api.coincap.io/v2/assets/${coinName}`
    );

    const responseJson = await response.json();

    setAsset(responseJson);
  };

  React.useEffect(() => {
    getAsset(id ? id : "bitcoin");
  }, []);

  const getChartData = async (coinName: string) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=91`
    );

    const responseJson = await response.json();
    const resPrices = responseJson.prices;

    setCharData(resPrices);
  };

  React.useEffect(() => {
    getChartData(id ? id : "bitcoin");
  }, []);

  console.log(newsArticles);

  const getNews = async (coinName: string) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${coinName}&sortBy=popularity&pageSize=3&apiKey=6cce3939c3ec495d9e1df9dd6df36c67`
    );

    const responseJson = await response.json();

    setNewsArticles(responseJson.articles);
  };

  React.useEffect(() => {
    getNews(id ? id : "bitcoin");
  }, []);

  console.log();

  const convertToUsd = (cryptoPrice: number) => {
    if (cryptoPrice) {
      setConvertToUSDValue(currentCoinValue * cryptoPrice);
    } else {
      setConvertToUSDValue(undefined);
    }
  };

  const convertToCrypto = (usdPrice: number) => {
    if (usdPrice) {
      setConvertToCryptoValue(usdPrice / currentCoinValue);
    } else {
      setConvertToCryptoValue(undefined);
    }
  };

  return (
    <div>
      <div className="coinInfo__container">
        <div className="coinInfo__coinNames">
          <p>Coins</p>
          <p className="coinInfo__name">{asset?.data.id}</p>
        </div>

        <div className="coinInfo__stats_container">
          <div className="coinInfo__stats_containerL">
            <div className="coinInfo__stats_containerL__Top">
              <p className="rank">{"Rank #" + asset?.data.rank}</p>
              <div className="coinInfo__stats_containerL__Top__name">
                <img src="https://assets.coingecko.com/coins/images/3263/thumb/CEL_logo.png?1609598753" />
                <h3>{`${asset?.data.id} (${asset?.data.symbol})`}</h3>
              </div>
              <div className="coinInfo__stats_containerL__Top__pirce">
                <h1>${Number(asset?.data.priceUsd).toLocaleString("en-US")}</h1>
                <h4>
                  {Number(asset?.data.changePercent24Hr).toLocaleString(
                    "en-US"
                  )}
                  %
                </h4>
              </div>
              <p className="rank__Deci">1.000000 {asset?.data.symbol}</p>
              <div className="coinInfo__stats_containerL__Top__Btns">
                <button>SH</button>
                <button>BE</button>
                <button>ST</button>
              </div>
            </div>

            <div className="coinInfo__stats_containerL__Bottom">
              <div>
                <div>
                  <p>Market Cap</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    ${Number(asset?.data.marketCapUsd).toLocaleString("en-US")}
                  </p>
                </div>
                <div>
                  <p>24 Hour Trading Volume</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    ${Number(asset?.data.volumeUsd24Hr).toLocaleString("en-US")}
                  </p>
                </div>
                <div>
                  <p>Fully Diluted Volume</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    ${Number(asset?.data.maxSupply).toLocaleString("en-US")}
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <p>Vwap 24Hr</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    ${Number(asset?.data.vwap24Hr).toLocaleString("en-US")}
                  </p>
                </div>
                <div>
                  <p>Total Supply</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    ${Number(asset?.data.supply).toLocaleString("en-US")}
                  </p>
                </div>
                <div>
                  <p>Max Supply</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    ${Number(asset?.data.maxSupply).toLocaleString("en-US")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="coinInfo__stats_containeR">
            <div className="coinInfo__stats_containeR_btns">
              <button>Buy/Sell</button>
              <button>Long/Short</button>
              <button>Earn Crypto</button>
            </div>

            <div className="coinInfo__stats_containeR_Info">
              <h3>Info</h3>

              <div className="coinInfo__stats_containeR_InfoRow">
                <p>Website</p>
                <div>
                  <h5>example.org</h5>
                  <h5>whitepaper</h5>
                </div>
              </div>

              <div className="coinInfo__stats_containeR_InfoRow">
                <p>Explorers</p>
                <div>
                  <h5>Blockchair</h5>
                </div>
              </div>

              <div className="coinInfo__stats_containeR_InfoRow">
                <p>Wallets</p>
                <div>
                  <h5>Ledger</h5>
                  <h5>Trezor</h5>
                  <h5>Electrum</h5>
                  <h5>Xdefi</h5>
                  <h5>Trust Wallet</h5>
                  <h5>Electrum</h5>
                  <h5>Xdefi</h5>
                  <h5>Trust Wallet</h5>
                </div>
              </div>

              <div className="coinInfo__stats_containeR_InfoRow">
                <p>Community</p>
                <div>
                  <h5>Reddit</h5>
                  <h5>Twitter</h5>
                  <h5>Facebook</h5>
                  <h5>bitcointalk.org</h5>
                </div>
              </div>

              <div className="coinInfo__stats_containeR_InfoRow">
                <p>Search on</p>
                <div>
                  <h5>Twitter</h5>
                </div>
              </div>

              <div className="coinInfo__stats_containeR_InfoRow">
                <p>Source Code</p>
                <div>
                  <h5>Github</h5>
                </div>
              </div>

              <div className="coinInfo__stats_containeR_InfoRow">
                <p>Tags</p>
                <div>
                  <h5>crypto</h5>
                </div>
              </div>
            </div>
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
          <div className="coinInfo__chart_containerL">
            <h1>
              {asset?.data.id} price chart ({asset?.data.symbol}/USD)
            </h1>
            <h5>Last updated 07:41AM UTC. Currency in USD.</h5>
            <div className="coinInfo__chart_graphBtns">
              <div>
                <button className="coinInfo__chart_graphBtns_L">Price</button>
                <button className="coinInfo__chart_graphBtns_mid">
                  Market Cap
                </button>
                <button className="coinInfo__chart_graphBtns_R">
                  Trading View
                </button>
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
              {/* <img src="https://insidebitcoins.com/wp-content/uploads/2022/02/BTCUSD_1D_23022022.png" /> */}
              <TestChart data={charData} />
            </div>
          </div>
          <div className="coinInfo__chart_containerR">
            <div className="coinInfo__chart_containerR__converter">
              <h2>Convert {asset?.data.symbol} to USD</h2>
              <div>
                <p>{asset?.data.symbol}</p>
                <input
                  type="number"
                  onChange={(e) => {
                    convertToUsd(Number(e.target.value));
                  }}
                  value={convertToCryptoValue}
                />
              </div>
              <div>
                <p>USD</p>
                <input
                  type="number"
                  value={convertToUSDValue}
                  onChange={(e) => {
                    convertToCrypto(Number(e.target.value));
                  }}
                />
              </div>
              <p>
                1 {asset?.data.symbol} = $
                {Number(asset?.data.priceUsd).toLocaleString("en-US")}
              </p>
            </div>

            <div className="coinInfo__chart_containerR__PriceStatistics">
              <h2>{asset?.data.symbol} Price Statistics</h2>
              <p>{asset?.data.symbol} Price Today</p>
              <div>
                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Price</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    ${Number(asset?.data.priceUsd).toLocaleString("en-US")}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>24h Volume</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    ${Number(asset?.data.volumeUsd24Hr).toLocaleString("en-US")}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>7d Low / 7d High</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    $18,650.25 / $21,707.39
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Trading Volume</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    ${Number(asset?.data.vwap24Hr).toLocaleString("en-US")}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Market Cap Rank</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    #{asset?.data.rank}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Market Cap</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    ${Number(asset?.data.marketCapUsd).toLocaleString("en-US")}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Market Cap Dominance</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    37.457%
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Volume / Market Cap</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    0.081
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="coinInfo__trendingCoinsContainer">
          <TrendingCoins />
        </div>

        <div className="coinInfo__NewsContainer">
          <NewsRow />
        </div>
      </div>
    </div>
  );
};

export default TestCoinInfo;
