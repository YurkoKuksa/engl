import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
`;

export const BurgerMenuWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 100%;
    height: 100%;

    ${({ $theme }) =>
      $theme === "dark" &&
      css`
        filter: brightness(2.8) contrast(0.9);
      `}
  }

  @media screen and (max-width: 767px) {
    top: 2px;
    right: 8px;
    svg {
      width: 85%;
      height: 85%;
    }
  }
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
  height: 100vh;
  overflow: hidden;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  z-index: 1000;
  transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const NavigationContent = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  background: linear-gradient(
    /* 135deg, */
      /* rgba(26, 26, 26, 0.95) 0%,
    rgba(74, 74, 74, 0.95) 100% */ 180deg,
    #c8a97e,
    #ad8456,
    #91623a
  );

  backdrop-filter: blur(10px);
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
  padding: 80px 30px 30px;
  display: flex;
  flex-direction: column;
  transform-origin: right center;
  transform: ${({ $isOpen }) => ($isOpen ? "scaleX(1)" : "scaleX(0)")};
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: ${({ $isOpen }) => ($isOpen ? 0.7 : 0)};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1) 0%,
      transparent 10%
    );
    pointer-events: none;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  @media screen and (max-width: 767px) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0.98 : 0)};
  }
`;

export const HoverArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ $isOpen }) => ($isOpen ? "350px" : "90px")};
  height: ${({ $isOpen }) => ($isOpen ? "100vh" : "90px")};
  pointer-events: auto;
  transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1000;
`;
