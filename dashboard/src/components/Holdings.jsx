import React , {useState, useEffect}from "react";

import VerticalGraph from "./VerticalGraph";
import axios from "axios";

//import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings", { withCredentials: true }).then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);


  const labels = allHoldings.map((subArray) => subArray.name);

    const formatAmount = (n) =>
      n.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    const renderAmount = (n) => {
      const [whole, decimals] = formatAmount(n).split(".");
      return (
        <>
          {whole}.<span>{decimals}</span>
        </>
      );
    };

    const totalInvestment = allHoldings.reduce((sum, s) => sum + s.avg * s.qty, 0);
    const currentValue = allHoldings.reduce((sum, s) => sum + s.price * s.qty, 0);
    const totalPnl = currentValue - totalInvestment;
    const totalPnlPercent =
      totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    
    ],
  };
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{renderAmount(totalInvestment)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{renderAmount(currentValue)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 style={totalPnl < 0 ? { color: "rgb(250, 118, 78)" } : undefined}>
            {formatAmount(totalPnl)} ({totalPnl >= 0 ? "+" : ""}
            {totalPnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;