import React, { useContext, createContext, useState } from "react";
import {
  ICoinGeckoService,
  ITrendingCoinData,
  IAllCoinsdata,
  IChartCoinDataXY,
  ICoinSpecificData,
  IProps,
} from "../types/coinGecko.interface";
import CoinGeckoService from "./CoinGeckoService";

interface allCoinGeckoData {
  trendingCoins: ITrendingCoinData[];
  allCoinsData: IAllCoinsdata[];
  chartData: IChartCoinDataXY[];
  coinSpecificData: ICoinSpecificData;
  getCoinSpecificCoinData: (name: string) => void;
}

const CoinGeckoDataContext = createContext<allCoinGeckoData | null>(null);

export const useAllCoinGeckoData = () => {
  return useContext(CoinGeckoDataContext);
};

const CoinGeckoApiDataProvider = ({ children }: IProps) => {
  const [trendingCoins, setTrendingCoins] = React.useState<ITrendingCoinData[]>(
    []
  );
  const [allCoinsData, setAllCoinsData] = useState<IAllCoinsdata[]>([]);
  const [chartData, setChartData] = useState<IChartCoinDataXY[]>([]);
  const [coinSpecificData, setCoinSpecificData] = useState<ICoinSpecificData>({
    id: "",
    symbol: "",
    name: "",
    image: {
      small: "",
    },
    market_cap_rank: 0,
    market_data: {
      current_price: {
        usd: 0,
      },
      market_cap: {
        usd: 0,
      },
      total_volume: {
        usd: 0,
      },
      price_change_percentage_24h: 0,
      total_supply: 0,
    },
  });

  // const alltrendingCoins: ICoinGeckoService = CoinGeckoService;

  // alltrendingCoins.getTrendingCoins().then((value) => {
  //   setTrendingCoins(value);
  // });

  // const allCoinsDataValues: ICoinGeckoService = CoinGeckoService;

  // allCoinsDataValues.getAllCoinsdata().then((value) => {
  //   setAllCoinsData(value);
  // });

  // const allchartData: ICoinGeckoService = CoinGeckoService;

  // allchartData.getChartData("bitcoin").then((value) => {
  //   setChartData(value);
  // });

  // const coinSpecific: ICoinGeckoService = CoinGeckoService;

  // const getCoinSpecificCoinData = (name: string) => {
  //   coinSpecific.getCoinSpecificData(name).then((value) => {
  //     setCoinSpecificData(value);
  //   });
  // };

  const coindata: ICoinGeckoService = CoinGeckoService;

  coindata.getTrendingCoins().then((value) => {
    setTrendingCoins(value);
  });

  coindata.getAllCoinsdata().then((value) => {
    setAllCoinsData(value);
  });

  coindata.getChartData("bitcoin").then((value) => {
    setChartData(value);
  });

  const getCoinSpecificCoinData = (name: string) => {
    coindata.getCoinSpecificData(name).then((value) => {
      setCoinSpecificData(value);
    });
  };

  return (
    <CoinGeckoDataContext.Provider
      value={{
        trendingCoins,
        allCoinsData,
        chartData,
        coinSpecificData,
        getCoinSpecificCoinData,
      }}
    >
      {children}
    </CoinGeckoDataContext.Provider>
  );
};

export default CoinGeckoApiDataProvider;
