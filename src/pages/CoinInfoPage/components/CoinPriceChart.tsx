import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { IChartCoinDataXY } from "../../../types/provider.interface";
import "../../../css/Chart.css";

interface ICoinPriceHistory {
  priceData: IChartCoinDataXY[];
}

interface IGraphStringDataXY {
  name: string;
  uv: string;
}

const CoinPriceChart = ({ priceData }: ICoinPriceHistory) => {
  const [chartDataXY, setChartDataXY] = useState<IGraphStringDataXY[]>([]);

  const convertToStringDataXY = () => {
    const chartStringdata: IGraphStringDataXY[] = [
      {
        name: "",
        uv: "",
      },
    ];

    priceData.map(([time, number]) => {
      let date = new Date(time);
      let dateInWords =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

      chartStringdata.push({
        name: dateInWords.toString(),
        uv: number.toString(),
      });
    });

    setChartDataXY(chartStringdata);
  };

  useEffect(() => {
    convertToStringDataXY();
  }, [priceData]);

  return (
    <div>
      <LineChart
        width={800}
        height={500}
        data={chartDataXY.slice(1)}
        margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
      >
        <Line
          type="monotone"
          dataKey="uv"
          stroke=" #8cc63f"
          dot={false}
          className="chartXFont"
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          xAxisId="0"
          dataKey="name"
          tick={{ fontSize: 7, fontWeight: 600 }}
          dy={10}
          dx={10}
        />
        <YAxis tick={{ fontSize: 10 }} />
      </LineChart>
    </div>
  );
};

export default CoinPriceChart;
