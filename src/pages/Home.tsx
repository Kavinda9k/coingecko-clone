import React from "react";
import "../css/Home.css";
import Switch from "@mui/material/Switch";
import Table from "../Components/Table";

const Home = () => {
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
            <div>
              <Switch />
            </div>
            <p>Show Stats</p>
          </div>
          <p>
            The global cryptocurrency market cap today is $1.09 Trillion, a 0.5%
            change in the last 24 hours. Read More
          </p>
        </div>

        <div className="main__tableContainer">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
