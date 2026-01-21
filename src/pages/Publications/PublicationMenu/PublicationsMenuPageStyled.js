// PublicationsMenuPageStyled.js
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

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

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 50px 20px 40px;
  position: relative;
  overflow: hidden;
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
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const MainTitle = styled.h1`
  font-size: 42px;
  margin: 0 0 50px 0;
  font-weight: 700;
  text-align: center;
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          color: rgb(199, 198, 198);
        `
      : css`
          color: rgba(113, 107, 107, 1);
        `}

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const PublicationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const PublicationCard = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(255, 255, 255, 0.9)"};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.08)"};
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
      : "0 4px 20px rgba(0, 0, 0, 0.08)"};

  ${({ $isHovered }) =>
    $isHovered &&
    css`
      transform: translateY(-8px) scale(1.02);
      box-shadow: ${({ theme }) =>
        theme.mode === "dark"
          ? "0 12px 40px rgba(0, 198, 255, 0.3)"
          : "0 12px 40px rgba(52, 152, 219, 0.25)"};
      border-color: ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(0, 198, 255, 0.5)"
          : "rgba(52, 152, 219, 0.4)"};
    `}

  &:active {
    transform: translateY(-4px) scale(1.01);
  }
`;

export const TypeBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 14px;
  background: ${({ $type, theme }) =>
    $type === "youtube"
      ? theme.mode === "dark"
        ? "rgba(255, 0, 0, 0.8)"
        : "rgba(255, 0, 0, 0.9)"
      : theme.mode === "dark"
        ? "rgba(52, 152, 219, 0.8)"
        : "rgba(52, 152, 219, 0.9)"};
  color: white;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  z-index: 2;
  backdrop-filter: blur(10px);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${PublicationCard}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(199, 198, 198)" : "rgba(44, 62, 80, 1)"};
  transition: color 0.3s ease;

  ${PublicationCard}:hover & {
    color: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(0, 198, 255, 1)" : "rgba(52, 152, 219, 1)"};
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.8)"
      : "rgba(90, 107, 112, 1)"};
  flex: 1;
`;

export const CardMeta = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const MetaItem = styled.span`
  font-size: 13px;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.6)"
      : "rgba(127, 140, 141, 1)"};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const Tag = styled.span`
  padding: 4px 12px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(0, 198, 255, 0.15)"
      : "rgba(52, 152, 219, 0.1)"};
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(0, 198, 255, 1)" : "rgba(52, 152, 219, 1)"};
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
`;
