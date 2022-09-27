import { useContext, createContext, useState, useEffect } from "react";
import {
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

interface allCoinGeckoData {
  trendingCoins: ITrendingCoinData[];
  allCoinsData: IAllCoinsdata[];
  chartData: IChartCoinDataXY[];
  coinSpecificData: ICoinSpecificData | undefined;
  getCoinSpecificCoinData: (name: string) => void;
  getGlobalCoinData: IGlobalCoinData | undefined;
  coinEcosystemsData: ICoinEcosytems[];
}

const CoinGeckoDataContext = createContext<allCoinGeckoData | null>(null);

export const useAllCoinGeckoData = () => {
  return useContext(CoinGeckoDataContext);
};

const CoinGeckoApiDataProvider = ({ children }: IProps) => {
  const [getGlobalCoinData, setGlobalCoinData] = useState<IGlobalCoinData>();
  const [coinEcosystemsData, getCoinEcosystemsData] = useState<
    ICoinEcosytems[]
  >([]);
  const [trendingCoins, setTrendingCoins] = useState<ITrendingCoinData[]>([]);
  const [allCoinsData, setAllCoinsData] = useState<IAllCoinsdata[]>([]);
  const [chartData, setChartData] = useState<IChartCoinDataXY[]>([]);
  const [coinSpecificData, setCoinSpecificData] = useState<
    ICoinSpecificData | undefined
  >(undefined);

  const CoinGeckoApiData: ICoinGeckoService = CoinGeckoService;

  useEffect(() => {
    CoinGeckoApiData.getTrendingCoins()
      .then((value) => {
        setTrendingCoins(value);
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

    CoinGeckoApiData.getChartData("bitcoin")
      .then((value) => {
        setChartData(value);
      })
      .catch((err) => console.log(err));
  }, []);

  const getCoinSpecificCoinData = (name: string) => {
    CoinGeckoApiData.getCoinSpecificData(name).then((value) => {
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
        getGlobalCoinData,
        coinEcosystemsData,
      }}
    >
      {children}
    </CoinGeckoDataContext.Provider>
  );
};

export default CoinGeckoApiDataProvider;
