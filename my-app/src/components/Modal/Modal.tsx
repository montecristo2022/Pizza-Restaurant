import "./Modal.css";

interface ModalProps {
  handleCloseModal: () => void;
}

export function Modal({ handleCloseModal }: ModalProps) {
  return (
    <div className="modal">
      <p onClick={handleCloseModal} className="closeModal">
        &#10006;
      </p>
      <h2 className="modalMainText">YOUR BASKET</h2>
    </div>
  );
}
