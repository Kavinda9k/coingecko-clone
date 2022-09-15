import React from "react";
import "../css/Table.css";
import { useData } from "../Context/Dataprovider";
import { useNavigate } from "react-router-dom";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { useTheme } from "../Context/ThemeContext";

interface Ilogo {
  logo: string;
}

const Table = () => {
  const allData = useData();
  const navigate = useNavigate();
  const theme = useTheme();

  const renderTable = allData.data.map((d, i) => {
    const num = Number(d.priceUsd);
    const supplyNum = Number(d.marketCapUsd);
    const formattedChange24Num = Number(Number(d.changePercent24Hr).toFixed(2));

    const formattedNum = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(num);

    const formattedSupplyNum = new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 3,
    }).format(supplyNum);

    return (
      <tr onClick={() => navigate(`/test/${d.id}`)}>
        <td className="coin__id">
          <div>
            <div
              className={theme.isDarkMode ? "star__btnDark" : "star__btnLight"}
            >
              <StarBorderRoundedIcon />
            </div>
            {d.rank}
          </div>
        </td>
        <td className="coin__name">
          <div>
            <img src={allData.logos[i]} className="coin__logo" />
            {d.id}
          </div>
        </td>
        <td></td>
        <td className="symbol__name">{d.symbol}</td>
        <td>${formattedNum}</td>
        <td>
          {formattedChange24Num < 0 ? (
            <div className="negative_number">{formattedChange24Num}%</div>
          ) : (
            <div className="positve_number">{formattedChange24Num}%</div>
          )}
        </td>
        <td>
          {formattedChange24Num < 0 ? (
            <div className="negative_number">{formattedChange24Num}%</div>
          ) : (
            <div className="positve_number">{formattedChange24Num}%</div>
          )}
        </td>
        <td>
          {formattedChange24Num < 0 ? (
            <div className="negative_number">{formattedChange24Num}%</div>
          ) : (
            <div className="positve_number">{formattedChange24Num}%</div>
          )}
        </td>
        <td>{formattedSupplyNum}</td>
        <td>{d.symbol}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="table__container">
        <table>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th></th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>Supply</th>
            <th>Mkt Cap</th>
          </tr>
          {renderTable}
        </table>
      </div>
    </div>
  );
};

export default Table;
