import scss from "./Modal.module.scss";

const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={scss.modal}>
        <button onClick={onClose} className={scss.modal_btn}>
          x
        </button>
      </div>
    )
  );
};
export default Modal;
