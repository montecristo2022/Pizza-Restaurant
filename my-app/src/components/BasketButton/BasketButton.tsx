import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
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
    console.log(allOrder);
  };

  return (
    <>
      {isOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          allOrder={allOrder}
          setAllOrder={setAllOrder}
          setQuantity={setQuantity}
          setTotalPrice={setTotalPrice}
        />
      )}
      <button onClick={handleOpenModal} className="buyPizzaLink">
        Price: {totalPrice.toFixed(2)}$ | 🛒 {itemQuantity}
      </button>
    </>
  );
}
