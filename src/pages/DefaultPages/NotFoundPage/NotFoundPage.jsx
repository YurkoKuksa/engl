// NotFoundPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  AnimatedBackground,
  Particle,
  ContentWrapper,
  ErrorCode,
  ErrorTitle,
  ErrorDescription,
  BackButton,
  IconWrapper,
  FloatingElement,
} from "./NotFoundPageStyled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 5,
      moveX: (Math.random() - 0.5) * 100,
      moveY: (Math.random() - 0.5) * 100,
    }));
    setParticles(newParticles);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <AnimatedBackground>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              "--x": `${particle.x}%`,
              "--y": `${particle.y}%`,
              "--duration": `${particle.duration}s`,
              "--delay": `${particle.delay}s`,
              "--move-x": `${particle.moveX}px`,
              "--move-y": `${particle.moveY}px`,
            }}
          />
        ))}
      </AnimatedBackground>

      <ContentWrapper>
        <IconWrapper>
          <FloatingElement delay={0}>🔍</FloatingElement>
          <FloatingElement delay={0.5}>❌</FloatingElement>
          <FloatingElement delay={1}>📄</FloatingElement>
        </IconWrapper>

        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorDescription>
          Unfortunately, the page you are looking for does not exist or has been
          moved.
        </ErrorDescription>

        <BackButton onClick={handleGoBack}>
          <span>←</span> Go Back
        </BackButton>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NotFoundPage;
