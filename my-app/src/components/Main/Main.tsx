import "./Main.css";
import { useEffect, useState } from "react";

interface Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
  popular: number;
  dough: boolean;
}

interface Props {
  pizzaData: Pizza[];
  setQuantity: (value: number) => void;
  quantity: number;
}


export function Main({ pizzaData, setQuantity, quantity }: Props) {
  const [priceFactors, setPriceFactors] = useState<{ [key: number]: number }>(
    {}
  );
  const [sizes, setSizes] = useState<{ [key: number]: number }>({});

  const handleSizeChange = (id: number, size: number) => {
    setSizes((prev) => ({ ...prev, [id]: size }));
    setPriceFactors((prev) => ({
      ...prev,
      [id]: size === 40 ? 1.35 : size === 30 ? 1.2 : 1,
    }));
  };

  const addPizzaToBasket = (id: number, name: string, price: number) => {
    const sizeFactor = sizes[id] === 40 ? 1.35 : sizes[id] === 30 ? 1.2 : 1; // Вычисляем коэффициент цены в зависимости от выбранного размера
    const finalPrice = (price * sizeFactor).toFixed(2); // Вычисляем итоговую цену с учетом выбранного размера

    console.log(`Added pizza ${name} (ID: ${id}) to basket for ${finalPrice}$`);
      setQuantity(quantity + 1)
  };

  useEffect(() => {
   
    console.log(`Current value of qu is: ${quantity}`);
}, [quantity]);


  return (
    <main className="main">
      <div className="choseTypeOfPizza">
        <ul className="typeList">
          <li className="typeListItem">
            <p className="typeListItemText">Все</p>
          </li>
          <li className="typeListItem">
            <p className="typeListItemText">Мясные</p>
          </li>
          <li className="typeListItem">
            <p className="typeListItemText">Вегетарианская</p>
          </li>
          <li className="typeListItem">
            <p className="typeListItemText">Острые</p>
          </li>
        </ul>
        <p className="sortPizzas">
          Сортировка по <span className="sortByChoice">популярности</span>
        </p>
      </div>
      <h1 className="title">All Pizzas</h1>
      <div className="pizzaInfoContainer">
        {pizzaData.map((el) => (
          <div className="pizzaInfoItem" key={el.id}>
            <img className="pizzaPicture" src={el.image}></img>
            <p className="nameOfPizza">{el.name}</p>
            <p className="price">
              Price:{" "}
              {priceFactors[el.id]
                ? (el.price * priceFactors[el.id]).toFixed(2)
                : el.price.toFixed(2)}
              $
            </p>
            <div className="sizesContainer">
              <span>Size:</span>
              <label>
                <input
                  type="radio"
                  name={`size-${el.id}`}
                  value={26}
                  onChange={() => handleSizeChange(el.id, 26)}
                  checked={sizes[el.id] === 26 || sizes[el.id] === undefined}
                />
                26 сm
              </label>
              <label>
                <input
                  type="radio"
                  name={`size-${el.id}`}
                  value={30}
                  onChange={() => handleSizeChange(el.id, 30)}
                  checked={sizes[el.id] === 30}
                />
                30 сm
              </label>
              <label>
                <input
                  type="radio"
                  name={`size-${el.id}`}
                  value={40}
                  onChange={() => handleSizeChange(el.id, 40)}
                  checked={sizes[el.id] === 40}
                />
                40 сm
              </label>
            </div>
            <button
              className="addPizza"
              onClick={() => addPizzaToBasket(el.id, el.name, el.price)}
            >
              Add to basket
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

































// const [dough, setDough] = useState<boolean>(true);

// const handleDoughThickness = (
//     id: number,
//     dough: boolean,
//     priceFactor: number
//   ) => {
//     console.log(id);
//     setDough(dough);
//     // setPriceFactors((prev) => ({ ...prev, [id]: priceFactor }));
//   };

/* <div>
              Толщина теста
              <button onClick={() => handleDoughThickness(el.id, false, 1)}>
                Тонкое
              </button>
              <button onClick={() => handleDoughThickness(el.id, true, 1.05)}>
                Толстое
              </button>
            </div> */
