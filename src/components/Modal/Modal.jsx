import ReactDOM from "react-dom";
import { useEffect } from "react";

// import { Icon } from "../Icon/Icon";
import { CustomBox, CustomButton, MainModalBox } from "./ModalStyled";

const modalRoot = document.querySelector("#modalRoot");
export const Modal = ({ children, toggleModal, className = "" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <MainModalBox onClick={handleClickOnBackdrop}>
      <CustomBox>
        <CustomButton type="button" onClick={toggleModal}>
          {/* <Icon name="close" className="fill-[#1E1E1E]" size="20" /> */}
        </CustomButton>
        {children}
      </CustomBox>
    </MainModalBox>,
    modalRoot
  );
};
