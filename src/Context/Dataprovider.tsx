import React, { createContext, useContext, useState } from "react";
import { logoArr } from "../links";

interface IProps {
  children: React.ReactNode;
  title?: string
}

/**
 * The goal in naming interfaces is to make it clear what it will be used for
 * If I were to import this somewhere else, how would I even know what IData is or what I'm going to do with it?
 * 
 * If you're developing professionally, you need to think about who will be reading this code and when. What if it's you coming back to fix some bug in 9 months? You're going to want to know why you set it up the way you did. What if another develoepr needs to work on it? You'll have to spend a ton of time explaining why you did things. 
 * 
 * Nobody is hyped about writing documentation in the moment, but it's worth it.
 */
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

const Dataprovider: React.FC<IProps> = ({ children }) => {
  const [data, setData] = useState<{data: Idata[], logos: string[]}>({
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
