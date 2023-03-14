import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./BasketButton.css";


interface PizzaQuantity {
  itemQuantity: number;
  totalPrice: number;
}

export function BasketButton({ itemQuantity, totalPrice }: PizzaQuantity) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <Modal handleCloseModal={handleCloseModal} />}
      <button onClick={handleOpenModal} className="buyPizzaLink">
        Price: {totalPrice.toFixed(2)}$ | 🛒 {itemQuantity}
      </button>
    </>
  );
}
