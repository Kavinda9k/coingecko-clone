import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useChartData } from "../Context/ChartDataProvider";
import React from "react";
import "../css/Chart.css";
import { useParams } from "react-router-dom";

interface IChartXYData {
  name: string;
  uv: string;
}

type IcoinName = {
  data: IchartData[];
};

type IchartData = [number, number];

const TestChart: React.FC<IcoinName> = ({ data }) => {
  const [data3, setData3] = React.useState<IChartXYData[]>([]);

  function mapChart() {
    const chartStringdata: IChartXYData[] = [
      {
        name: "",
        uv: "",
      },
    ];

    data.map((d) => {
      var date = new Date(d[0] * 1);
      var final_date =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      chartStringdata.push({
        name: final_date.toString(),
        uv: d[1].toString(),
      });
    });
    setData3(chartStringdata);
  }

  React.useEffect(() => {
    mapChart();
  }, [data]);

  return (
    <div>
      <LineChart
        width={800}
        height={500}
        data={data3}
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

export default TestChart;
