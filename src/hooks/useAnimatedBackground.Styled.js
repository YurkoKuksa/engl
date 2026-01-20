import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translate(var(--x), var(--y)) rotate(180deg);
    opacity: 0.6;
  }
`;

export const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.3;
`;

export const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(176, 224, 255, 0.5)"
      : "rgba(52, 152, 219, 0.4)"};
  border-radius: 50%;
  animation: ${float} var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  left: var(--x);
  top: var(--y);
`;
