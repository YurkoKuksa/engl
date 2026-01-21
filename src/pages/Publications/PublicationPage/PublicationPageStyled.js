import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

// export const ContentWrapper = styled.div`
//   max-width: 900px;
//   margin: 0 auto;
//   position: relative;
//   z-index: 1;
// `;

// export const BackButton = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px 20px;
//   background: ${({ theme }) =>
//     theme.mode === "dark"
//       ? "rgba(255, 255, 255, 0.05)"
//       : "rgba(52, 152, 219, 0.1)"};
//   color: ${({ theme }) =>
//     theme.mode === "dark" ? "rgb(199, 198, 198)" : "rgba(52, 152, 219, 1)"};
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: 500;
//   margin-bottom: 30px;
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${({ theme }) =>
//       theme.mode === "dark"
//         ? "rgba(255, 255, 255, 0.1)"
//         : "rgba(52, 152, 219, 0.2)"};
//     transform: translateX(-4px);
//   }
// `;

export const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(52, 152, 219, 0.1)"};
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(199, 198, 198)" : "rgba(52, 152, 219, 1)"};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(52, 152, 219, 0.2)"};
    transform: translateX(-4px);
  }

  @media screen and (min-width: 1024px) {
    position: fixed;
    top: 30px;
    left: 40px;
    margin-bottom: 0;
    z-index: 10;
  }
`;

export const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 20px 0;
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
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.8)"
      : "rgba(90, 107, 112, 1)"};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 40px;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 10px 40px rgba(0, 0, 0, 0.5)"
      : "0 10px 40px rgba(0, 0, 0, 0.15)"};
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 10px 40px rgba(0, 0, 0, 0.5)"
      : "0 10px 40px rgba(0, 0, 0, 0.15)"};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ArticleContent = styled.article`
  margin-bottom: 50px;
  padding: 40px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(255, 255, 255, 0.7)"};
  border-radius: 16px;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
      : "0 4px 20px rgba(0, 0, 0, 0.08)"};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.05)"};

  @media screen and (max-width: 768px) {
    padding: 25px 20px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
  border-top: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
`;

export const Meta = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const MetaItem = styled.span`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.7)"
      : "rgba(127, 140, 141, 1)"};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tag = styled.span`
  padding: 6px 16px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(0, 198, 255, 0.15)"
      : "rgba(52, 152, 219, 0.1)"};
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(0, 198, 255, 1)" : "rgba(52, 152, 219, 1)"};
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
`;

export const Author = styled.div`
  font-size: 15px;
  font-style: italic;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.8)"
      : "rgba(127, 140, 141, 1)"};
`;
