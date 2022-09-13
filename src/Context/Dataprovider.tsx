import React, { createContext, useContext } from "react";
import { logoArr } from "../links";

interface Ichildren {
  children: React.ReactNode;
}

export interface Idata {
  id: string;
  rank: string;
  symbol: string;
  supply: string;
  marketCapUsd: string;
  priceUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  maxSupply: string;
  vwap24Hr: string;
}

interface IdataArray {
  data: Idata[];
  logos: string[];
}

const DataContext = createContext<IdataArray>({
  data: [],
  logos: [],
});

export const useData = () => {
  return useContext(DataContext);
};

const Dataprovider: React.FC<Ichildren> = ({ children }) => {
  const [data, setData] = React.useState({
    data: [],
    logos: logoArr,
  });

  const getData = async () => {
    const response = await fetch(`https://api.coincap.io/v2/assets`);

    const responseJson = await response.json();
    const responsePosts = {
      data: responseJson.data,
      logos: logoArr,
    };
    setData(responsePosts);
  };

  React.useEffect(() => {
    getData();
  }, [DataContext]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default Dataprovider;
