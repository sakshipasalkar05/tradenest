import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import GeneralContext from "./GeneralContextObject";

export const GeneralContextProvider = (props) => {
  const [isOrderWindowOpen, setIsOrderWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  const openWindow = (uid, mode) => {
    setOrderMode(mode);
    setSelectedStockUID(uid);
    setIsOrderWindowOpen(true);
  };

  const handleCloseWindow = () => {
    setIsOrderWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: (uid) => openWindow(uid, "BUY"),
        openSellWindow: (uid) => openWindow(uid, "SELL"),
        closeBuyWindow: handleCloseWindow,
      }}
    >
      {props.children}
      {isOrderWindowOpen && (
        <BuyActionWindow
          key={selectedStockUID + orderMode}
          uid={selectedStockUID}
          mode={orderMode}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;