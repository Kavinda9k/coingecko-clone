import { createContext, useContext, useState } from "react";
import { IProps, ICoinSpecificData } from "../types/provider.interface";

interface ICoinSpecificDataObj {
  coinSpecificData: ICoinSpecificData;
  getNewCoinData?: (coinName: string) => void;
}

const CoinSpecificDataContext = createContext<ICoinSpecificDataObj>({
  coinSpecificData: {
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
  },
});

export const useCoinSpecificData = () => {
  return useContext(CoinSpecificDataContext);
};

const CoinSpecificDataProvider = ({ children }: IProps) => {
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

  const searchcoinSpecificData = async (coinName: string = "bitcoin") => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}`
    );
    const reponseJSON = await response.json();
    setCoinSpecificData(reponseJSON);
  };

  const getNewCoinData = (coinName: string) => {
    searchcoinSpecificData(coinName);
  };

  return (
    <CoinSpecificDataContext.Provider
      value={{ coinSpecificData, getNewCoinData }}
    >
      {children}
    </CoinSpecificDataContext.Provider>
  );
};

export default CoinSpecificDataProvider;
