import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";


// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.desc),
//   ]);
// };

const App = () => {
  return (
    <div>

      <Order />
      {/* <Pizza name="Pepperoni" desc="Eat it" image={'/public/pizzas/pepperoni.webp'} /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
