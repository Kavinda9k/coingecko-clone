import { useContext, createContext, useState, useEffect } from "react";
import { IProps, ITrendingCoinData } from "../types/provider.interface";

const TrendingCoinContext = createContext<ITrendingCoinData[]>([]);

export const useTrendingCoinsData = () => {
  return useContext(TrendingCoinContext);
};

const TrendingCoinsProvider = ({ children }: IProps) => {
  const [alltrendingCoins, setAllTrendingCoins] = useState<ITrendingCoinData[]>(
    []
  );

  const getTrendingCoins = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const responsJSON = await response.json();
    setAllTrendingCoins(responsJSON.coins);
  };

  useEffect(() => {
    getTrendingCoins();
  }, []);

  return (
    <TrendingCoinContext.Provider value={alltrendingCoins}>
      {children}
    </TrendingCoinContext.Provider>
  );
};

export default TrendingCoinsProvider;
