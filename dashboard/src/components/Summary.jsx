import React, { useState, useEffect } from "react";
import axios from "axios";

const formatK = (n) =>
  Math.abs(n) >= 1000 ? (n / 1000).toFixed(2) + "k" : n.toFixed(2);

const Summary = ({ username }) => {
  const [holdings, setHoldings] = useState([]);
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings", { withCredentials: true })
      .then((res) => setHoldings(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3002/funds", { withCredentials: true })
      .then((res) => setBalance(res.data.balance))
      .catch((err) => console.error(err));
  }, []);

  const investment = holdings.reduce((sum, s) => sum + s.avg * s.qty, 0);
  const currentValue = holdings.reduce((sum, s) => sum + s.price * s.qty, 0);
  const pnl = currentValue - investment;
  const pnlPercent = investment > 0 ? (pnl / investment) * 100 : 0;
  const isProfit = pnl >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{balance !== null ? formatK(balance) : "—"}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {formatK(pnl)}{" "}
              <small>
                {isProfit ? "+" : ""}
                {pnlPercent.toFixed(2)}%
              </small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatK(currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatK(investment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;