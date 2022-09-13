import React, { createContext, useContext } from "react";

interface IchartData {
  chartData: IchartDataArr[];
  changeCoin?: (name: string) => void;
}

interface Ichildren {
  children: React.ReactNode;
}

type IchartDataArr = [time: number, price: number];

const ChartContext = createContext<IchartData>({
  chartData: [[0, 0]],
});

export const useChartData = () => {
  return useContext(ChartContext);
};

const ChartDataProvider: React.FC<Ichildren> = ({ children }) => {
  const [chartData, setChartData] = React.useState<IchartDataArr[]>([]);
  const [currentCoinName, setCurrentCoinName] =
    React.useState<string>("bitcoin");

  const getChartData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${currentCoinName}/market_chart?vs_currency=usd&days=360`
    );

    const responseJson = await response.json();
    setChartData(responseJson.prices);
  };

  React.useEffect(() => {
    getChartData();
  }, [currentCoinName]);

  const changeCoin = (name: string) => {
    setCurrentCoinName(name);
  };

  return (
    <ChartContext.Provider value={{ chartData, changeCoin }}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartDataProvider;
