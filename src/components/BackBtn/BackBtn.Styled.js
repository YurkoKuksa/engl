import styled from "styled-components";

// Secondary / Outline button з колірного паспорта платформи.
// Кольори вшито сюди, тож залежності від tokens немає.
const c = {
  brand: "#45818E", // рамка + текст (idle)
  brandDeep: "#013f4a", // текст на hover
  mint: "#D0E0E3", // заливка на hover
  shadow: "rgba(1, 63, 74, 0.2)",
};

export const BackButton = styled.button`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px 9px 14px;
  border: 1px solid ${c.brand};
  border-radius: 10px;
  background: transparent;
  color: ${c.brand};
  font-family: "Inter", system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.25s ease;
  }

  &:hover {
    background-color: ${c.mint};
    color: ${c.brandDeep};
    box-shadow: 0 4px 14px ${c.shadow};
  }

  /* стрілка м'яко «відступає» вліво */
  &:hover svg {
    transform: translateX(-3px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${c.brand};
    outline-offset: 3px;
  }

  @media (max-width: 640px) {
    padding: 9px;
    span {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    svg {
      transition: none;
    }
  }
`;
