import { ICoinPriceHistory } from "../../../types/coinGecko.interface";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartArea,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  elements: { point: { radius: 0 } },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const PriceChart = ({ priceData }: ICoinPriceHistory) => {
  const labels = priceData.map((data, i) => {
    let epochDate = new Date(data[0]);
    let dateInWords = `${epochDate.getFullYear()}/${epochDate.getMonth()}/${epochDate.getDate()}`;
    let formattedDate = moment(dateInWords).format("MMMM d, YYYY");
    return formattedDate;
  });

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: priceData.map((data) => data[1]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(47,148,237,0.54)");
          gradient.addColorStop(1, "rgba(125,185,232,0)");
          return gradient;
        },
        borderWidth: 1,
      },
    ],
    options: {
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PriceChart;
