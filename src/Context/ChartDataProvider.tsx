import { createContext, useContext, useState, useEffect } from "react";
import { IProps, IChartCoinDataXY } from "../types/provider.interface";

interface IChartCoinPriceData {
  chartData: IChartCoinDataXY[];
  changeCoin?: (name: string) => void;
}

const ChartDataContext = createContext<IChartCoinPriceData>({
  chartData: [[0, 0]],
});

export const useChartData = () => {
  return useContext(ChartDataContext);
};

const ChartDataProvider = ({ children }: IProps) => {
  const [chartData, setChartData] = useState<IChartCoinDataXY[]>([]);
  const [currentCoinName, setCurrentCoinName] = useState<string>("bitcoin");

  const getChartData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${currentCoinName}/market_chart?vs_currency=usd&days=360`
    );

    const responseJson = await response.json();
    setChartData(responseJson.prices);
  };

  useEffect(() => {
    getChartData();
  }, [currentCoinName]);

  const changeCoin = (name: string) => {
    setCurrentCoinName(name);
  };

  return (
    <ChartDataContext.Provider value={{ chartData, changeCoin }}>
      {children}
    </ChartDataContext.Provider>
  );
};

export default ChartDataProvider;
