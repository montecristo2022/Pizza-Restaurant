import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BasketPage } from "../BasketPage/BasketPage";
import "./App.css";

import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import pizzaData from "../PizzaData";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="container">
      <Header itemQuantity={quantity} totalPrice={totalPrice} />
      <Main
        pizzaData={pizzaData}
        setQuantity={setQuantity}
        quantity={quantity}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}

export default App;
