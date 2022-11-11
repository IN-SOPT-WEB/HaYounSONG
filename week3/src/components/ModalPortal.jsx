import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal-root"); // 독립 공간
  return reactDom.createPortal(children, el);
};

export default ModalPortal;