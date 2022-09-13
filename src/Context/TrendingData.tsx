import React, { useContext, createContext } from "react";

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
  const [trendingCoins, setTrendingCoins] = React.useState<ItrendingCoinsArr>(
    []
  );

  const getTrendingCoins = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const responsJSON = await response.json();
    setTrendingCoins(responsJSON.coins);
  };

  React.useEffect(() => {
    getTrendingCoins();
  }, []);

  return (
    <TrendingContext.Provider value={trendingCoins}>
      {children}
    </TrendingContext.Provider>
  );
};

export default TrendingData;
