import "./IngridientsButton.css";
import { useState } from "react";

export function IngridientsButton({
  pizzaArray,
  setPizzaArray,
}: {
  pizzaArray: any[];
  setPizzaArray: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [allPizzas, setAllPizzas] = useState(pizzaArray);

  const handleClick = (e: any) => {
    const buttonOption = e.target.textContent;
    if (buttonOption === "All") {
      setPizzaArray(allPizzas);
    } else if (buttonOption === "Meat") {
      const meatPizzas = allPizzas.filter((pizza) =>
        pizza.characteristics.includes("meat")
      );
      setPizzaArray(meatPizzas);
    } else if (buttonOption === "Vegetarian") {
      const vegeterianPizzas = allPizzas.filter((pizza) =>
        pizza.characteristics.includes("vegetarian")
      );
      setPizzaArray(vegeterianPizzas);
    } else if (buttonOption === "Spicy") {
      const spicyPizzas = allPizzas.filter((pizza) =>
        pizza.characteristics.includes("spicy")
      );
      setPizzaArray(spicyPizzas);
    }
  };

  return (
    <ul className="typeList" onClick={handleClick}>
      <li>
        <button className="typeListButton">All</button>
      </li>
      <li>
        <button className="typeListButton">Meat</button>
      </li>
      <li>
        <button className="typeListButton">Vegetarian</button>
      </li>
      <li>
        <button className="typeListButton">Spicy</button>
      </li>
    </ul>
  );
}
