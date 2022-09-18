import { createContext, useContext, useState, useEffect } from "react";
import { IProps, IAllCoinsdata } from "../types/provider.interface";

const AllCoinsDataContext = createContext<IAllCoinsdata[]>([]);

export const useAllCoinsData = () => {
  return useContext(AllCoinsDataContext);
};

const AllCoinsDataProvider = ({ children }: IProps) => {
  const [allCoinsData, setAllCoinsData] = useState<IAllCoinsdata[]>([]);

  const getAllCoinsData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h`
    );

    const responseJson = await response.json();
    const responseAllCoinsData = responseJson;
    setAllCoinsData(responseAllCoinsData);
  };

  useEffect(() => {
    getAllCoinsData();
  }, [AllCoinsDataContext]);

  return (
    <AllCoinsDataContext.Provider value={allCoinsData}>
      {children}
    </AllCoinsDataContext.Provider>
  );
};

export default AllCoinsDataProvider;
