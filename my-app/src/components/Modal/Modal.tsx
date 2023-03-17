import React, { useState, useEffect } from "react";
import "./Modal.css";
import MySvg from "../images/rubbishBin.svg";

interface ModalProps {
  handleCloseModal: () => void;
  allOrder: Order[];
  setAllOrder: (value: Order[]) => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
}

interface Order {
  id: number;
  name: string;
  price: number;
}

interface UniquePizzas {
  [id: number]: {
    id: number;
    name: string;
    price: number;
    count: number;
  };
}

export function Modal({
  handleCloseModal,
  allOrder,
  setAllOrder,
  setQuantity,
  setTotalPrice,
  totalPrice,
}: ModalProps) {
  useEffect(() => {
    console.log(uniquePizzas);
  }, [allOrder]);

  const uniquePizzas: any = {};

  allOrder.forEach((onePizza) => {
    if (uniquePizzas[onePizza.id]) {
      uniquePizzas[onePizza.id].count++;
    } else {
      uniquePizzas[onePizza.id] = {
        ...onePizza,
        count: 1,
      };
    }
  });

  return (
    <div className="modal">
      <div className="containerForClosingModal">
        <button onClick={handleCloseModal} className="closeModal">
          &#10006;
        </button>
      </div>

      <h2 className="modalMainText">YOUR BASKET</h2>
      <div className="containerForButton">
        <button
          className="deleteButton"
          onClick={() => {
            setAllOrder([]);
            setQuantity(0);
            setTotalPrice(0);
          }}
        >
          <span className="deleteOrdersText">Delete your orders</span>
          <img src={MySvg} alt="Rubbish bin" />
        </button>
      </div>

      {allOrder.length > 0 ? (
        allOrder
          .reduce(
            (
              uniquePizzas: Array<{
                id: number;
                name: string;
                price: number;
                count: number;
              }>,
              onePizza: Order
            ) => {
              const existingPizzaIndex = uniquePizzas.findIndex(
                (pizza) => pizza.id === onePizza.id
              );
              if (existingPizzaIndex !== -1) {
                uniquePizzas[existingPizzaIndex].count++;
              } else {
                uniquePizzas.push({
                  ...onePizza,
                  count: 1,
                });
              }
              return uniquePizzas;
            },
            []
          )
          .map((pizza) => {
            return (
              <div className="containerForPizzasModal" key={pizza.id}>
                <p className="pizzaName">
                  {pizza.name}: 
                </p>
                <p className="pizzaCount">{pizza.count}</p>
              </div>
            );
          })
          .reverse()
      ) : (
        <div>Your basket is empty. Choose one of our great pizzas.</div>
      )}
    </div>
  );
}

{
  /* <button onClick={test}>ТЕСТ</button> */
}

// const [pizzaArrayForModal, setPizzaArrayForModal] = useState([])

// function test() {
//   const ordersById: any = [{}];
//   // let totalPriceOfAllPizzas = 0
//   for (const el of allOrder) {
//     const { id, name, price } = el;
//     if (!ordersById[id]) {
//       ordersById[id] = {
//         name,
//         quantity: 0,
//         totalPrice: 0,
//       };
//     }
//     ordersById[id].quantity++;
//     ordersById[id].totalPrice += price;
//     setPizzaArrayForModal(ordersById)
//     console.log(pizzaArrayForModal)
//   }
// }

{
  /* {allOrder.length > 0 ? (
        allOrder.map((onePizza) => {
          return <p className="addedToBasketPizza">{onePizza.name}</p>;
        })
      ) : (
        <div>Your basket is empty. Choose one of our great pizzas.</div>
      )} */
}
