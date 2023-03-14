
import "./Header.css";
import { BasketButton } from "../BasketButton/BasketButton";
import pizzaHeaderImg from "../images/pizzaHeaderImg.jpg";


interface PizzaQuantity {
  itemQuantity: number;
  totalPrice: number;
}


export function Header({ itemQuantity, totalPrice }: PizzaQuantity) {
  


  return (
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
      <BasketButton itemQuantity={itemQuantity} totalPrice={totalPrice}/>
    </header>
  );
}
