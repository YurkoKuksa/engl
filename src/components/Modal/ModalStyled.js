import styled from "styled-components";

export const MainModalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4); /* bg-black + bg-opacity-40 */
  backdrop-filter: blur(4px); /* backdrop-blur-sm */
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 49;
`;

export const CustomBox = styled.div`
  position: relative;
  background-color: var(--my-lightblue); /* Або конкретний колір */
  padding: 44px;
  border-radius: 24px;
  max-height: 95%;
  overflow: hidden;

  /* Адаптивна ширина */
  max-width: 300px; /* За замовчуванням (sm) */

  @media (min-width: 640px) {
    /* sm */
    max-width: 350px;
  }

  @media (min-width: 768px) {
    /* md */
    max-width: 704px;
  }

  @media (min-width: 1024px) {
    /* lg */
    max-width: 1240px;
  }
`;

export const CustomButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;
