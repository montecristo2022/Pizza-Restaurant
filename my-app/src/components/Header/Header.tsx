import "./Header.css";
import { BasketButton } from "../BasketButton/BasketButton";
import pizzaHeaderImg from "../images/pizzaHeaderImg.jpg";

interface PizzaQuantity {
itemQuantity: number
}


export function Header({itemQuantity}: PizzaQuantity) {
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

      {/* <a className="buyPizzaLink" href="">
        Price: 450 UAH
      </a> */}

      <BasketButton itemQuantity={itemQuantity} />
    </header>
  );
}
