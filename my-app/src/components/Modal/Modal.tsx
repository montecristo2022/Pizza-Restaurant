import React, { useState, useEffect } from "react";
import "./Modal.css";
import MySvg from "../images/rubbishBin.svg";

interface ModalProps {
  handleCloseModal: () => void;
  handleConfirm: () => void;
  allOrder: Order[];
  setAllOrder: (value: Order[]) => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
  itemQuantity: number;
}

interface Order {
  id: number;
  name: string;
  price: number;
}

export function Modal({
  handleCloseModal,
  allOrder,
  setAllOrder,
  setQuantity,
  setTotalPrice,
  handleConfirm,
  totalPrice,
  itemQuantity,
}: ModalProps) {
  const uniquePizzas: any = {};

  const deletePizzaWithSuchId = (id: number) => {
    const totalPriceOfDeletedPizzas = allOrder
      .filter((el) => el.id === id)
      .map((el) => el.price)
      .reduce((sum, num) => sum + num, 0);
    setTotalPrice(totalPrice - totalPriceOfDeletedPizzas);

    const quatityAfterFeleating = allOrder.filter((el) => el.id === id).length;
    setQuantity(itemQuantity - quatityAfterFeleating);
    setAllOrder(allOrder.filter((el) => el.id !== id));

    console.log(`Delete pizza with id ${id}`);
  };

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
        {allOrder.length > 0 ? <button
          className="deleteButton"
          onClick={() => {
            setAllOrder([]);
            setQuantity(0);
            setTotalPrice(0);
          }}
        >
          <span className="deleteOrdersText">Delete your orders</span>
          <img src={MySvg} alt="Rubbish bin" />
        </button> : null}
        
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
                <p className="pizzaName">{pizza.name}:</p>
                <p className="pizzaCount">{pizza.count}</p>
                <button className="deleteOneTypeOfPizza" onClick={() => deletePizzaWithSuchId(pizza.id)}>
                  Delete
                </button>
              </div>
            );
          })
          .reverse()
      ) : (
        <div className="emptyBasketText">Your basket is empty. Choose one of our great pizzas.</div>
      )}
      {allOrder.length > 0 ? (
        <button className="confirmButton" onClick={handleConfirm}>
          Confirm order
        </button>
      ) : null}
    </div>
  );
}
