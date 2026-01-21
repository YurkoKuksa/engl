// NotFoundPageStyled.js
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translate(var(--move-x), var(--move-y)) rotate(180deg);
    opacity: 0.6;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(135deg, rgba(26, 35, 126, 0.3) 0%, rgba(13, 27, 42, 0.5) 100%)"
      : "linear-gradient(135deg, rgba(227, 242, 253, 0.5) 0%, rgba(187, 222, 251, 0.3) 100%)"};
`;

export const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
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

export const ContentWrapper = styled.div`
  max-width: 600px;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    gap: 20px;
  }
`;

export const FloatingElement = styled.div`
  animation: ${bounce} 2s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
`;

export const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: 800;
  margin: 0 0 20px 0;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(135deg, rgba(0, 198, 255, 1) 0%, rgba(52, 152, 219, 1) 100%)"
      : "linear-gradient(135deg, rgba(52, 152, 219, 1) 0%, rgba(41, 128, 185, 1) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${pulse} 3s ease-in-out infinite;
  text-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 0 40px rgba(0, 198, 255, 0.3)"
      : "0 0 40px rgba(52, 152, 219, 0.2)"};

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(199, 198, 198)" : "rgba(44, 62, 80, 1)"};

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ErrorDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 40px 0;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.8)"
      : "rgba(90, 107, 112, 1)"};
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(135deg, rgba(0, 198, 255, 0.8) 0%, rgba(52, 152, 219, 0.8) 100%)"
      : "linear-gradient(135deg, rgba(52, 152, 219, 0.9) 0%, rgba(41, 128, 185, 0.9) 100%)"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 8px 20px rgba(0, 198, 255, 0.3)"
      : "0 8px 20px rgba(52, 152, 219, 0.25)"};
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) =>
      theme.mode === "dark"
        ? "0 12px 30px rgba(0, 198, 255, 0.4)"
        : "0 12px 30px rgba(52, 152, 219, 0.35)"};
  }

  &:active {
    transform: translateY(-1px);
  }

  span {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(-3px);
  }

  @media screen and (max-width: 768px) {
    padding: 14px 28px;
    font-size: 15px;
  }
`;
