import { useState, createContext, useContext } from "react";

// Create Context
export const TotalPriceContext = createContext();

// Create Provider
export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
};

// Use Context
export const useTotalPrice = () => useContext(TotalPriceContext);
