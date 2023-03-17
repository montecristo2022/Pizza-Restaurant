import { BasketButton } from "../BasketButton/BasketButton";
import pizzaHeaderImg from "../images/pizzaHeaderImg.jpg";
import "./Header.css";

interface Order {
  id: number;
  name: string;
  price: number;
}

interface PizzaQuantity {
  itemQuantity: number;
  totalPrice: number;
  allOrder: Order[];
  setAllOrder: (value: Order[]) => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export function Header({
  itemQuantity,
  totalPrice,
  allOrder,
  setAllOrder,
  setQuantity,
  setTotalPrice,
}: PizzaQuantity) {
  return (
    <>
      <header className="header">
        <div className="headerImgAndTextContainer">
          <div>
            <img className="pizzaImg" src={pizzaHeaderImg}></img>
          </div>
          <div className="headerText">
            <h2>React Pizze</h2>
            <p>The best pizza for you and your friends</p>
          </div>
        </div>
        <BasketButton
          itemQuantity={itemQuantity}
          totalPrice={totalPrice}
          allOrder={allOrder}
          setAllOrder={setAllOrder}
          setQuantity={setQuantity}
          setTotalPrice={setTotalPrice}
          
        />
      </header>
    </>
  );
}
