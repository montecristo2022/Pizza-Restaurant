import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import pizzaData from "../PizzaData";
import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [allOrder, setAllOrder] = useState<
    { id: number; name: string; price: number }[]
  >([]);

  return (
    <div className="container">
      <Header
        itemQuantity={quantity}
        totalPrice={totalPrice}
        allOrder={allOrder}
        setAllOrder={setAllOrder}
        setQuantity={setQuantity}
        setTotalPrice={setTotalPrice}
      />
      <Main
        pizzaData={pizzaData}
        setQuantity={setQuantity}
        quantity={quantity}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        allOrder={allOrder}
        setAllOrder={setAllOrder}
      />
    </div>
  );
}

export default App;
