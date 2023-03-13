import "./BasketButton.css";

interface PizzaQuantity {
itemQuantity: number
}

export function BasketButton({itemQuantity}: PizzaQuantity) {
  return (
      <a className="buyPizzaLink" href="">
        Price: $ | 🛒 {itemQuantity}
      </a>
 
  );
}
