import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import Notiflix from "notiflix";
import "./BasketButton.css";

interface PizzaQuantity {
  itemQuantity: number;
  totalPrice: number;
  allOrder: Order[];
  setAllOrder: (value: Order[]) => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

interface Order {
  id: number;
  name: string;
  price: number;
}

export function BasketButton({
  allOrder,
  setAllOrder,
  itemQuantity,
  totalPrice,
  setQuantity,
  setTotalPrice,
}: PizzaQuantity) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    const uniquePizzas: (Order & { count: number })[] = [];

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


    Notiflix.Report.success(
      "Your order has been confirmed",
      "Thank you for the order. Expect delivery within 2 hours.",
      "Okey"
    );

    setIsOpen(false);
    setQuantity(0);
    setTotalPrice(0);
    setAllOrder([]);
  };

  return (
    <>
      {isOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          handleConfirm={handleConfirm}
          allOrder={allOrder}
          setAllOrder={setAllOrder}
          setQuantity={setQuantity}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
          itemQuantity={itemQuantity}
        />
      )}
      <button onClick={handleOpenModal} className="buyPizzaLink">
        Price: {totalPrice.toFixed(2)}$ | 🛒 {itemQuantity}
      </button>
    </>
  );
}

// console.log(uniquePizzas)
//  arr.push.uniquePizzas
// .map((el: any) => el.name)
// .filter((name: any) => name)
// .map((name) => name.trim())
// .join(", ")
