import React from "react";
import "../css/CoinInfo.css";
import { useData, Idata } from "../Context/Dataprovider";
import { useParams } from "react-router-dom";
import Chart from "./Chart";

const CoinInfo = () => {
  const allData = useData();
  const { id } = useParams();

  const [currentCoin, setCurrentCoin] = React.useState<Idata[]>();
  const [currentCoinValue, setCurrentCoinValue] = React.useState(0);
  const [convertToUSDValue, setConvertToUSDValue] = React.useState<
    number | undefined
  >();
  const [convertToCryptoValue, setConvertToCryptoValue] = React.useState<
    number | undefined
  >();

  const currenCoinObject = currentCoin && currentCoin[0];

  React.useEffect(() => {
    const getCoin = allData.data.filter((d, i) => {
      return d.id == id;
    });
    setCurrentCoin(getCoin);
  }, []);

  React.useEffect(() => {
    if (currentCoin) {
      const val = Number(currentCoin[0].priceUsd).toFixed(2);
      setCurrentCoinValue(Number(val));
    }
  }, [currentCoin]);

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
          <p className="coinInfo__name">
            {currenCoinObject ? currenCoinObject.id : "coin"}
          </p>
        </div>

        <div className="coinInfo__stats_container">
          <div className="coinInfo__stats_containerL">
            <div className="coinInfo__stats_containerL__Top">
              <p className="rank">
                {currenCoinObject ? "Rank #" + currenCoinObject.rank : "#"}
              </p>
              <div className="coinInfo__stats_containerL__Top__name">
                <img src="https://assets.coingecko.com/coins/images/3263/thumb/CEL_logo.png?1609598753" />
                <h3>
                  {currenCoinObject ? currenCoinObject.id : "coin"} (
                  {currenCoinObject ? currenCoinObject.symbol : ""})
                </h3>
              </div>
              <div className="coinInfo__stats_containerL__Top__pirce">
                <h1>
                  $
                  {currenCoinObject
                    ? Number(currenCoinObject.priceUsd).toLocaleString("en-US")
                    : "0.0000"}
                </h1>
                <h4>
                  {currenCoinObject
                    ? Number(currenCoinObject.changePercent24Hr).toLocaleString(
                        "en-US"
                      )
                    : "0"}
                  %
                </h4>
              </div>
              <p className="rank__Deci">
                1.000000 {currenCoinObject ? currenCoinObject.symbol : ""}
              </p>
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
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.marketCapUsd).toLocaleString(
                          "en-US"
                        )
                      : "$0.0000"}
                  </p>
                </div>
                <div>
                  <p>24 Hour Trading Volume</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.volumeUsd24Hr).toLocaleString(
                          "en-US"
                        )
                      : "$0.0000"}
                  </p>
                </div>
                <div>
                  <p>Fully Diluted Volume</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.maxSupply).toLocaleString(
                          "en-US"
                        )
                      : "$0.0000"}
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <p>Vwap 24Hr</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.vwap24Hr).toLocaleString(
                          "en-US"
                        )
                      : "$0.0000"}
                  </p>
                </div>
                <div>
                  <p>Total Supply</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.supply).toLocaleString("en-US")
                      : "$0.0000"}
                  </p>
                </div>
                <div>
                  <p>Max Supply</p>
                  <p className="coinInfo__stats_containerL__Bottom_stat">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.maxSupply).toLocaleString(
                          "en-US"
                        )
                      : "$0.0000"}
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
              {currenCoinObject ? currenCoinObject.id : "coin"} price chart (
              {currenCoinObject ? currenCoinObject.symbol : "Coin"}/USD)
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
              <Chart name={id ? id : "tether"} />
            </div>
          </div>
          <div className="coinInfo__chart_containerR">
            <div className="coinInfo__chart_containerR__converter">
              <h2>
                Convert {currenCoinObject ? currenCoinObject.symbol : "Coin"} to
                USD
              </h2>
              <div>
                <p>{currenCoinObject ? currenCoinObject.symbol : ""}</p>
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
                1 {currenCoinObject ? currenCoinObject.symbol : ""} = $
                {currenCoinObject
                  ? Number(currenCoinObject.priceUsd).toLocaleString("en-US")
                  : "0.000"}
              </p>
            </div>

            <div className="coinInfo__chart_containerR__PriceStatistics">
              <h2>
                {currenCoinObject ? currenCoinObject.symbol : ""} Price
                Statistics
              </h2>
              <p>
                {currenCoinObject ? currenCoinObject.symbol : ""} Price Today
              </p>
              <div>
                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Price</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.priceUsd).toLocaleString(
                          "en-US"
                        )
                      : "0.0000"}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>24h Volume</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.volumeUsd24Hr).toLocaleString(
                          "en-US"
                        )
                      : "0.0000"}
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
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.vwap24Hr).toLocaleString(
                          "en-US"
                        )
                      : "0.0000"}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Market Cap Rank</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    #{currenCoinObject ? currenCoinObject.rank : "0"}
                  </p>
                </div>

                <div className="coinInfo__chart_containerR__PriceStatistics_rows">
                  <p>Market Cap</p>
                  <p className="coinInfo__chart_containerR__PriceStatistics_rowsB">
                    $
                    {currenCoinObject
                      ? Number(currenCoinObject.marketCapUsd).toLocaleString(
                          "en-US"
                        )
                      : "0.0000"}
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
      </div>
    </div>
  );
};

export default CoinInfo;
