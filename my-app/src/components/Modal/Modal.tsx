import "./Modal.css";
import MySvg from "../images/rubbishBin.svg";

interface ModalProps {
  handleCloseModal: () => void;
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

export function Modal({ handleCloseModal, allOrder, setAllOrder, setQuantity, setTotalPrice }: ModalProps) {
  return (
    <div className="modal">
      <div className="containerForClosingModal">
         <p onClick={handleCloseModal} className="closeModal">
        &#10006;
      </p>
     </div>

      <h2 className="modalMainText">YOUR BASKET</h2>
      <div className="containerForButton">
          <button
        className="deleteButton"
        onClick={() => {
          setAllOrder([]);
          setQuantity(0)
          setTotalPrice(0)
        }}
      >
        <span className="deleteOrdersText">Delete your orders</span>
        <img src={MySvg} alt="Rubbish bin" />
      </button>
    </div>

      {allOrder.length > 0 ? (
        allOrder.map((onePizza) => {
          return <p className="addedToBasketPizza">{onePizza.name}</p>;
        })
      ) : (
        <div>Your basket is empty. Choose one of our great pizzas.</div>
      )}
    </div>
  );
}

// export function Modal({ handleCloseModal, allOrder, setAllOrder }: ModalProps) {
//   return (
//     <div className="modal">
//       <p onClick={handleCloseModal} className="closeModal">
//         &#10006;
//       </p>
//       <h2 className="modalMainText">YOUR BASKET</h2>
//       {allOrder.length > 0 ? allOrder.map((onePizza) => { <p>{onePizza.name}</p>}) : <div>Your basket is empty. Choose one of our great pizzas.</div>}
//     </div>
//   );
// }
