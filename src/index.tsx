import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import Dataprovider from "./Context/Dataprovider";
import ChartDataProvider from "./Context/ChartDataProvider";
import TrendingData from "./Context/TrendingData";
import ThemeContextProvider from "./Context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dataprovider>
      <ChartDataProvider>
        <TrendingData>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </TrendingData>
      </ChartDataProvider>
    </Dataprovider>
  </React.StrictMode>
);
