import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Animations
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${({ $isDark }) =>
    $isDark ? "rgb(18, 18, 18)" : "rgb(245, 247, 250)"};
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ $isDark }) =>
    $isDark ? "rgba(176, 224, 255, 0.5)" : "rgba(52, 152, 219, 0.4)"};
  border-radius: 50%;
  animation: ${float} var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  left: var(--left);
  top: var(--top);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const IconWrapper = styled.div`
  font-size: 80px;
  margin-bottom: 30px;
  animation: ${pulse} 2s ease-in-out infinite;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  margin: 0 0 20px 0;
  font-weight: 700;
  ${({ $isDark }) =>
    $isDark
      ? css`
          color: rgb(199, 198, 198);
        `
      : css`
          color: rgba(113, 107, 107, 1);
        `}

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin: 0 0 40px 0;
  color: ${({ $isDark }) =>
    $isDark ? "rgba(206, 214, 222, 0.8)" : "rgba(90, 107, 112, 1)"};
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

const BackButton = styled.button`
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ $isDark }) =>
    $isDark ? "rgba(0, 198, 255, 0.9)" : "rgba(52, 152, 219, 0.9)"};
  color: white;
  box-shadow: ${({ $isDark }) =>
    $isDark
      ? "0 4px 20px rgba(0, 198, 255, 0.3)"
      : "0 4px 20px rgba(52, 152, 219, 0.25)"};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ $isDark }) =>
      $isDark
        ? "0 8px 30px rgba(0, 198, 255, 0.4)"
        : "0 8px 30px rgba(52, 152, 219, 0.35)"};
  }

  &:active {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    padding: 12px 28px;
    font-size: 14px;
  }
`;

// Main Component
const ArticleContentNotFound = () => {
  const [isDark, setIsDark] = useState(true);

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 15}s`,
    delay: `${Math.random() * 5}s`,
    x: `${(Math.random() - 0.5) * 100}px`,
    y: `${(Math.random() - 0.5) * 100}px`,
  }));

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <PageContainer $isDark={isDark}>
      <AnimatedBackground>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            $isDark={isDark}
            style={{
              "--left": particle.left,
              "--top": particle.top,
              "--duration": particle.duration,
              "--delay": particle.delay,
              "--x": particle.x,
              "--y": particle.y,
            }}
          />
        ))}
      </AnimatedBackground>

      <ContentWrapper>
        <IconWrapper>📄</IconWrapper>
        <Title $isDark={isDark}>Article Content Not Found</Title>
        <Subtitle $isDark={isDark}>
          The article you're looking for doesn't exist or has been removed.
        </Subtitle>
        <BackButton $isDark={isDark} onClick={handleGoBack}>
          ← Go Back
        </BackButton>

        {/* Theme toggle for demo */}
        <div style={{ marginTop: "40px" }}>
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              padding: "8px 16px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              color: isDark ? "#fff" : "#333",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Toggle Theme (Demo)
          </button>
        </div>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ArticleContentNotFound;
