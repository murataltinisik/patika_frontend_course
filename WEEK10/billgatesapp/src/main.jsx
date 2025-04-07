import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TotalPriceProvider>
      <App />
    </TotalPriceProvider>
  </StrictMode>
);
