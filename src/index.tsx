import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import AllCoinsDataProvider from "./Context/AllCoinsDataProvider";
import ChartDataProvider from "./Context/ChartDataProvider";
import TrendingCoinsProvider from "./Context/TrendingCoinsProvider";
import ThemeProvider from "./Context/ThemeProvider";
import CoinSpecificDataProvider from "./Context/CoinSpecificDataProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AllCoinsDataProvider>
      <ChartDataProvider>
        <CoinSpecificDataProvider>
          <TrendingCoinsProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </TrendingCoinsProvider>
        </CoinSpecificDataProvider>
      </ChartDataProvider>
    </AllCoinsDataProvider>
  </React.StrictMode>
);
