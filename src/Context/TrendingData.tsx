import React, { useContext, createContext, useState } from "react";
import { ICoinGeckoService, ITrendingCoin } from "../types/coinGecko.interface";
import CoinGeckoService from "./CoinGeckoService";

interface ItrendingCoinsAll {
  item: ItrendingCoin;
}

interface Ichildren {
  children: React.ReactNode;
}

type ItrendingCoinsArr = ItrendingCoinsAll[];

interface ItrendingCoin {
  coin_id: number;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  price_btc: number;
  score: number;
  slug: string;
  small: string;
  symbol: string;
  thumb: string;
}

// const TrendingContext = createContext<ItrendingCoinsAll>({
//   coins: [],
// });

const TrendingContext = createContext<ItrendingCoinsArr>([]);

export const useTrendingData = () => {
  return useContext(TrendingContext);
};

const TrendingData: React.FC<Ichildren> = ({ children }) => {
  /** 
   * Can you guess why I set up a separate interface from the actual service class?
   * 
   * Also, why would I need the :ICoinGeckoService part here? How could that be helpful?
   */
  const service: ICoinGeckoService = CoinGeckoService

  /**
   * The dumb names I'm using in this file are just so I don't break you're existing provider! Normally I would have replaced trendingCoins directly
   */
  const [trendingCoins, setTrendingCoins] = React.useState<ItrendingCoinsArr>(
    []
  );

  const [trendingCoinsNew, setTrendingCoinsNew] = useState<ITrendingCoin[]>([])

  const getTrendingCoinsOld = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const responsJSON = await response.json();
    setTrendingCoins(responsJSON.coins);
  };

  const getTrendingCoinsNew = async () => {
    const coins = await service.getTrendingCoins()
    setTrendingCoinsNew(coins)
  }

  React.useEffect(() => {
    // getTrendingCoinsOld();
    getTrendingCoinsNew()
  }, []);

  return (
    <TrendingContext.Provider value={trendingCoins}>
      {children}
    </TrendingContext.Provider>
  );
};

export default TrendingData;
