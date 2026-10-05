import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContextObject";
import { watchlist } from "../data/data";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const generalContext = useContext(GeneralContext);
  const stock = watchlist.find((s) => s.name === uid);
  const isSell = mode === "SELL";

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock ? stock.price : 0.0);
  const [product, setProduct] = useState("CNC");

  const orderValue = Number(stockQuantity) * Number(stockPrice) || 0;

  const handleOrderClick = async () => {
    try {
      await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode,
          product,
        },
        { withCredentials: true }
      );
      generalContext.closeBuyWindow();
    } catch (err) {
      alert(err.response?.data?.message || "Order failed. Please try again.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div style={{ fontSize: "0.8rem", marginBottom: "4px" }}>
          <label style={{ marginRight: "20px", cursor: "pointer" }}>
            <input
              type="radio"
              name="product"
              value="CNC"
              checked={product === "CNC"}
              onChange={() => setProduct("CNC")}
              style={{ marginRight: "6px" }}
            />
            Delivery (CNC)
          </label>
          <label style={{ cursor: "pointer" }}>
            <input
              type="radio"
              name="product"
              value="MIS"
              checked={product === "MIS"}
              onChange={() => setProduct("MIS")}
              style={{ marginRight: "6px" }}
            />
            Intraday (MIS)
          </label>
        </div>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          {isSell
            ? `You'll receive ₹${orderValue.toFixed(2)}`
            : `Margin required ₹${orderValue.toFixed(2)}`}
        </span>
        <div>
          <Link
            className={isSell ? "btn btn-sell" : "btn btn-blue"}
            onClick={handleOrderClick}
          >
            {isSell ? "Sell" : "Buy"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;