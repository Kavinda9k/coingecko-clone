import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import ThemeProvider from "./Context/ThemeProvider";
import CoinGeckoApiDataProvider from "./Context/CoinGeckoApiDataProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CoinGeckoApiDataProvider>
        <App />
      </CoinGeckoApiDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);
