import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { CartContext } from "./contexts";

const App = () => {
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
      <div>
        <h1 className="logo">Padre Gino's Pizza</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
