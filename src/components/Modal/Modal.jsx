import { useCallback, useEffect, useState } from "react";
import { MainModalBox, CustomButton, ModalImage } from "./ModalStyled";

export const Modal = ({ toggleModal, imageSrc, imageAlt }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    // Повертаємо scroll ПЕРЕД анімацією закриття
    document.body.style.overflow = "auto";

    setIsClosing(true);
    setTimeout(() => {
      toggleModal();
    }, 500);
  }, [toggleModal]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Тут вже не потрібно, бо ми це робимо в handleClose
      document.body.style.overflow = "auto";
    };
  }, [handleClose]);

  return (
    <MainModalBox onClick={handleClose} $isClosing={isClosing}>
      <CustomButton onClick={handleClose}>✕</CustomButton>

      <ModalImage
        src={imageSrc}
        alt={imageAlt}
        onClick={(e) => e.stopPropagation()}
        $isClosing={isClosing}
      />
    </MainModalBox>
  );
};
