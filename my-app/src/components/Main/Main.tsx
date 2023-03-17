import "./Main.css";
import { useEffect, useState } from "react";
import { IngridientsButton } from "../IngridientsButton/IngridientsButton";

interface Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
  popular: number;
  characteristics: string[];
}

interface Props {
  pizzaData: Pizza[];
  setQuantity: (value: number) => void;
  setTotalPrice: (value: number) => void;
  totalPrice: number;
  quantity: number;
  allOrder: Order[];
  setAllOrder: (value: Order[]) => void;
}

interface Order {
  id: number;
  name: string;
  price: number;
 
}

export function Main({
  pizzaData,
  setQuantity,
  quantity,
  setTotalPrice,
  totalPrice,
  allOrder,
  setAllOrder,
}: Props) {
  const [priceFactors, setPriceFactors] = useState<{ [key: number]: number }>(
    {}
  );

  // const [thisTypePizzaQuantity, setThisTypePizzaQuantity] = useState(1)
  // const [thisTypePizzaPrice, setthisTypePizzaPrice] = useState(0)
 
  const [sizes, setSizes] = useState<{ [key: number]: number }>({});
  const [pizzaArray, setPizzaArray] = useState<
    Array<{
      id: number;
      name: string;
      price: number;
      image: string;
      popular: number;
    }>
  >(pizzaData);

  const handleSizeChange = (id: number, size: number) => {
    setSizes((prev) => ({ ...prev, [id]: size }));
    setPriceFactors((prev) => ({
      ...prev,
      [id]: size === 40 ? 1.35 : size === 30 ? 1.2 : 1,
    }));
  };







  const addPizzaToBasket = (id: number, name: string, price: number) => {
    const sizeFactor = sizes[id] === 40 ? 1.35 : sizes[id] === 30 ? 1.2 : 1;
    const finalPrice = (price * sizeFactor).toFixed(2);


    const newPizzaOrder = {
      id: id,
      name: name,
      price: Number(finalPrice),
    };

    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + Number(finalPrice));
    setAllOrder([...allOrder, newPizzaOrder]);
    
  };






  const handleSortByChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    if (option === "popularity") {
      const sortedPizzas = [...pizzaData].sort((a, b) => b.popular - a.popular);
      setPizzaArray(sortedPizzas);
    } else if (option === "price") {
      const sortedPizzas = [...pizzaData].sort((a, b) => b.price - a.price);
      setPizzaArray(sortedPizzas);
    }
  };

  useEffect(() => {
    const sortedPizzas = [...pizzaData].sort((a, b) => b.popular - a.popular);
    setPizzaArray(sortedPizzas);
  }, []);

  // useEffect(() => {
  //     console.log(allOrder)
  // }, [allOrder])

  return (
    <main className="main">
      <div className="choseTypeOfPizza">
        <IngridientsButton
          setPizzaArray={setPizzaArray}
          pizzaArray={pizzaArray}
        />

        <div>
          <p className="sortOfPizzas">
            Сортировка по{" "}
            <select className="sortByChoice" onChange={handleSortByChoice}>
              <option>popularity</option>
              <option>price</option>
            </select>
          </p>
        </div>
      </div>
      <h1 className="title">All Pizzas</h1>
      <div className="pizzaInfoContainer">
        {pizzaArray.map((el) => (
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












// const calculateTotalPrice = (id: number): number => {
//   const filteredPizzas = allOrder.filter((pizza) => pizza.id === id);
//   const totalPrice = filteredPizzas.reduce(
//     (acc, curr) => acc + curr.price,
//     0
//   );
//   return totalPrice;
// };

// const isSuchPizzaAlreadyBooght = (existingPizza: Order | undefined) => {
//   if (existingPizza) {
//     setThisTypePizzaQuantity((prevQuantity) => prevQuantity + 1);
//     const totalPrice = calculateTotalPrice(existingPizza.id);
//     setthisTypePizzaPrice(totalPrice);
//     console.log(existingPizza)
//     console.log(thisTypePizzaQuantity);
//     console.log(totalPrice);
//   } else {
//     console.log(false);
//   }
// };
  
  
//   const addPizzaToBasket = (id: number, name: string, price: number) => {
//   const sizeFactor = sizes[id] === 40 ? 1.35 : sizes[id] === 30 ? 1.2 : 1;
//   const finalPrice = (price * sizeFactor).toFixed(2);

//   const existingPizza = allOrder.find((pizza) => pizza.id === id);

//   isSuchPizzaAlreadyBooght(existingPizza);

//   const newPizzaOrder = {
//     id: id,
//     name: name,
//     price: Number(finalPrice),
//   };

//   setQuantity(quantity + 1);
//   setTotalPrice(totalPrice + Number(finalPrice));
//   setAllOrder([...allOrder, newPizzaOrder]);
// };
