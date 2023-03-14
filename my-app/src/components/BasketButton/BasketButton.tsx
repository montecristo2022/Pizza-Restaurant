import React, { useState } from "react";
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
      {isOpen && <div className="modal">Basket</div>}
      <a onClick={handleOpenModal} className="buyPizzaLink">
        Price: {totalPrice.toFixed(2)}$ | 🛒 {itemQuantity}
      </a>
    </>
  );
}



















// import React, { useState } from "react";
// import "./BasketButton.css";



// interface PizzaQuantity {
//   itemQuantity: number;
//   totalPrice: number;
// }

// export function BasketButton({ itemQuantity, totalPrice }: PizzaQuantity) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpenModal = () => {

//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {isOpen && <div className="modal">Basket</div>}
//       <a onClick={handleOpenModal} className="buyPizzaLink">
//         Price: {totalPrice.toFixed(2)}$ | 🛒 {itemQuantity}
//       </a>
//     </>
//   );
// }



