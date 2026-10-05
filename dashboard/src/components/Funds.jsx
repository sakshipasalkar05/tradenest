import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3002";

const formatAmount = (n) =>
  n.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const Funds = () => {
  const [balance, setBalance] = useState(null);
  const [mode, setMode] = useState(null); // "add", "withdraw" or null
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/funds`, { withCredentials: true })
      .then((res) => setBalance(res.data.balance))
      .catch((err) => console.error(err));
  }, []);

  const openForm = (selectedMode) => {
    setMode(selectedMode);
    setAmount("");
    setError("");
  };

  const closeForm = () => {
    setMode(null);
    setAmount("");
    setError("");
  };

  const handleSubmit = async () => {
    setError("");
    try {
      const { data } = await axios.post(
        `${API_URL}/funds/${mode}`,
        { amount },
        { withCredentials: true }
      );
      setBalance(data.balance);
      closeForm();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const shownBalance = balance !== null ? formatAmount(balance) : "—";

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button className="btn btn-green" onClick={() => openForm("add")}>
          Add funds
        </button>
        <button className="btn btn-blue" onClick={() => openForm("withdraw")}>
          Withdraw
        </button>
      </div>

      {mode && (
        <div className="funds" style={{ marginTop: "12px" }}>
          <input
            type="number"
            min="1"
            placeholder={
              mode === "add" ? "Amount to add" : "Amount to withdraw"
            }
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "2px",
              marginRight: "8px",
            }}
          />
          <button className="btn btn-blue" onClick={handleSubmit}>
            Confirm
          </button>
          <button className="btn btn-grey" onClick={closeForm}>
            Cancel
          </button>
        </div>
      )}

      {error && (
        <p
          style={{
            color: "rgb(250, 118, 78)",
            textAlign: "right",
            fontSize: "0.8rem",
            marginTop: "8px",
          }}
        >
          {error}
        </p>
      )}

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{shownBalance}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{shownBalance}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <button className="btn btn-blue">Open Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;