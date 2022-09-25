import "../../css/Home.css";
import Switch from "@mui/material/Switch";
import Table from "./components/Table";
import MarketStatsContainer from "./components/MarketStatsContainer";
import { useState } from "react";
import TrendingCoinsContainer from "../../Components/TrendingCoinsContainer";
import { useAllCoinGeckoData } from "../../Context/CoinGeckoApiDataProvider";
import AllCategoriesBtn from "./components/AllCategoriesBtn";

const Home = () => {
  const [showStats, setShowStats] = useState(false);
  const allCoins = useAllCoinGeckoData();

  return (
    <div>
      <div className="main__Container">
        <div className="main__nav">
          <p>Portfolio</p>
          <p>Coins</p>
          <p>New Coin</p>
          <p>Gainers & Losers</p>
          <p>Categories</p>
          <p>NFT</p>
          <p>DeFi</p>
          <p>Gaming</p>
        </div>

        <div className="main__heading">
          <div>
            <h1>Cryptocurrency Prices by Market Cap</h1>
            <div className="main__heading__switch">
              <Switch onChange={() => setShowStats((prev) => !prev)} />
            </div>
            <p>Show Stats</p>
          </div>
          <p>
            The global cryptocurrency market cap today is $1.09 Trillion, a 0.5%
            change in the last 24 hours. Read More
          </p>
          {showStats && <MarketStatsContainer />}
        </div>

        <AllCategoriesBtn coinEcosystems={allCoins?.coinEcosystemsData} />

        <div className="main__tableContainer">
          <Table />
        </div>

        <TrendingCoinsContainer trendingCoins={allCoins?.trendingCoins} />

        <div className="coinInfo__DescriptionContainer">
          <div>
            <h2>What is Crypto Market Cap?</h2>
            <p>
              Crypto market cap is the total value of all the coins of a
              particular cryptocurrency that have been mined or are in
              circulation. Market capitalization is used to determine the
              ranking of cryptocurrencies. The higher the market cap of a
              particular crypto coin, the higher its ranking and share of the
              market. Crypto market cap is calculated by multiplying the total
              number of coins in circulation by its current price. For instance,
              to calculate the market cap of Ethereum, all you need to do is
              multiply the total number of Ethereum in circulation by the
              current price of one Ethereum and you will get its market cap.
            </p>
          </div>

          <div>
            <h2>How to compare Cryptocurrencies Market Cap?</h2>
            <p>Crypto market cap can be divided into three categories:</p>
            <ul>
              <li>Small-cap cryptocurrencies (&#x2190;$1 billion).</li>
              <li>Mid-cap Cryptocurrencies ($1 billion - $10 billion)</li>
              <li>Large-cap cryptocurrencies (&#x2192;$10 billion)</li>
            </ul>

            <p>
              As a financial metric, market cap allows you to compare the total
              circulating value of one cryptocurrency with another. Large cap
              cryptocurrencies such as Bitcoin and Ethereum have a market cap of
              over $10 billion. They typically consist of protocols that have
              demonstrated track records, and have a vibrant ecosystem of
              developers maintaining and enhancing the protocol, as well as
              building new projects on top of them. While market cap is a simple
              and intuitive comparison metric, it is not a perfect point of
              comparison. Some cryptocurrency projects may appear to have
              inflated market cap through price swings and the tokenomics of
              their supply. As such, it is best to use this metric as a
              reference alongside other metrics such as trading volume,
              liquidity, fully diluted valuation, and fundamentals during your
              research process.
            </p>
          </div>

          <div>
            <h2>How does CoinGecko Calculate Cryptocurrency Prices?</h2>
            <p>
              The price is calculated using a global volume-weighted average
              price formula which is based on the pairings available on
              different exchanges of a particular crypto asset. For examples and
              more detailed information on how we track cryptocurrency prices
              and other metrics, <a>see our methodology page here.</a>
            </p>
          </div>

          <div>
            <h2>Why are Cryptocurrency Prices Different on Exchanges?</h2>
            <p>
              You may notice that cryptocurrencies listed on different exchanges
              have different prices. The reasons for this are complex, but
              simply put cryptocurrencies are traded on different exchanges and
              across different markets with varying economic conditions,
              liquidity, trading pairs, and offerings (e.g. derivatives /
              leverage) which all influence price in their own way.
            </p>
          </div>

          <div>
            <h2>Where to Check Cryptocurrency Prices?</h2>
            <p>
              You can track over 10,000 crypto prices on CoinGecko across more
              than 50 currencies. Popular cryptocurrency pairs include{" "}
              <a>BTC to USD, ETH to USD, and SLP to PHP.</a> You can also track
              metrics such as 24 hour trading volume, market capitalization,
              price chart, historical performance chart, the circulating supply,
              and more. Sign up to use CoinGecko’s crypto portfolio to track the
              performance of your portfolio. You may also check out
              <a>GeckoTerminal</a> (currently in beta), our comprehensive
              multichain on-chain charting tool featuring live charts, current
              trades, market sentiment and more as it happens in real time!
              CoinGecko also has a mobile app that enables you to track
              cryptocurrencies on <a>Android</a> and <a>IOS</a>.
            </p>
          </div>
          <div>
            <h2>What is 24h Volume in the Table Above?</h2>
            <p>
              The 24h trading volume refers to the amount a cryptocurrency has
              been bought and sold on all exchanges within the last 24 hours on
              the spot market (see <a>derivatives volume</a> here). For
              instance, if the 24h volume for Ethereum is $15 billion, it means
              that $15 billion worth of Ether had changed hands across all
              exchanges in the last 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
