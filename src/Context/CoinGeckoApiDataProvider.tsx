import { useContext, createContext, useState, useEffect } from "react";
import {
  allCoinGeckoData,
  ICoinGeckoService,
  ITrendingCoinData,
  IAllCoinsdata,
  IChartCoinDataXY,
  ICoinSpecificData,
  IProps,
  IGlobalCoinData,
  ICoinEcosytems,
} from "../types/coinGecko.interface";
import CoinGeckoService from "./CoinGeckoService";

const CoinGeckoDataContext = createContext<allCoinGeckoData | null>(null);

export const useAllCoinGeckoData = () => {
  return useContext(CoinGeckoDataContext);
};

const CoinGeckoApiDataProvider = ({ children }: IProps) => {
  const [globalCoinData, setGlobalCoinData] = useState<IGlobalCoinData>();
  const [coinEcosystemsData, getCoinEcosystemsData] = useState<
    ICoinEcosytems[]
  >([]);
  const [trendingCoinsData, setTrendingCoinsData] = useState<
    ITrendingCoinData[]
  >([]);
  const [allCoinsData, setAllCoinsData] = useState<IAllCoinsdata[]>([]);
  const [chartData, setChartData] = useState<IChartCoinDataXY[]>([]);
  const [coinSpecificData, setCoinSpecificData] = useState<
    ICoinSpecificData | undefined
  >(undefined);

  const CoinGeckoApiData: ICoinGeckoService = CoinGeckoService;

  useEffect(() => {
    CoinGeckoApiData.getTrendingCoins()
      .then((value) => {
        setTrendingCoinsData(value);
      })
      .catch((err) => console.log(err));

    CoinGeckoApiData.getCoinEcosytemData()
      .then((value) => {
        getCoinEcosystemsData(value);
      })
      .catch((err) => console.log(err));

    CoinGeckoApiData.getAllCoinsdata()
      .then((value) => {
        setAllCoinsData(value);
      })
      .catch((err) => console.log(err));

    CoinGeckoApiData.getGlobalCoinData()
      .then((value) => {
        setGlobalCoinData(value);
      })
      .catch((err) => console.log(err));
  }, []);

  const getCoinSpecificData = async (name: string) => {
    const value = await CoinGeckoApiData.getCoinSpecificData(name)
    return value
  };

  return (
    <CoinGeckoDataContext.Provider
      value={{
        trendingCoinsData,
        allCoinsData,
        chartData,
        coinSpecificData,
        getCoinSpecificData,
        globalCoinData,
        coinEcosystemsData,
      }}
    >
      {children}
    </CoinGeckoDataContext.Provider>
  );
};

export default CoinGeckoApiDataProvider;
