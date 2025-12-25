import React, { useEffect, useState } from "react";

const HeroAnimation = () => {
  const [leftWord, setLeftWord] = useState(0);
  const [rightTopWord, setRightTopWord] = useState(1);
  const [rightBottomWord, setRightBottomWord] = useState(2);
  const words = ["LEARN", "SPEAK", "TEACH", "GROW", "EXCEL"];

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftWord((prev) => (prev + 1) % words.length);
    }, 2500);

    const rightTopInterval = setInterval(() => {
      setRightTopWord((prev) => (prev + 1) % words.length);
    }, 3000);

    const rightBottomInterval = setInterval(() => {
      setRightBottomWord((prev) => (prev + 1) % words.length);
    }, 3500);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightTopInterval);
      clearInterval(rightBottomInterval);
    };
  }, [words.length]);

  return (
    <div className="hero-animation-container">
      {/* Left Side */}
      <div className="side-container left-side">
        {/* English text */}
        <div className="english-text">ENGLISH</div>

        {/* Pencil writing */}
        <div className="pencil-container">
          <div className="pencil"></div>
          <div className="writing-line"></div>
        </div>

        {/* Rotating word */}
        <div className="word-display">
          <span key={`left-${leftWord}`} className="rotating-word">
            {words[leftWord]}
          </span>
        </div>

        {/* Star decoration */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
      </div>

      {/* Right Side */}
      <div className="side-container right-side">
        {/* Rotating word - Top */}
        <div className="word-display">
          <span key={`right-top-${rightTopWord}`} className="rotating-word">
            {words[rightTopWord]}
          </span>
        </div>

        {/* Notebook */}
        <div className="notebook">
          <div className="notebook-line"></div>
          <div className="notebook-line"></div>
          <div className="notebook-line"></div>
        </div>

        {/* Rotating word - Bottom */}
        <div className="word-display">
          <span
            key={`right-bottom-${rightBottomWord}`}
            className="rotating-word"
          >
            {words[rightBottomWord]}
          </span>
        </div>

        {/* Star decoration */}
        <div className="star star-3"></div>
        <div className="star star-4"></div>
      </div>

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left:
              i < 6
                ? `${15 + Math.random() * 15}%`
                : `${70 + Math.random() * 15}%`,
            top: `${15 + Math.random() * 70}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        ></div>
      ))}

      <style jsx>{`
        .hero-animation-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        /* Side Containers */
        .side-container {
          position: absolute;
          top: 0;
          height: 100%;
          width: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }

        .left-side {
          left: 200px;
        }

        .right-side {
          right: 200px;
        }

        /* English Text */
        .english-text {
          font-size: 24px;
          font-weight: bold;
          color: rgba(102, 126, 234, 0.5);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 5px;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        /* Pencil */
        .pencil-container {
          position: relative;
          width: 80%;
          height: 60px;
          margin-left: 180px;
        }

        .pencil {
          position: absolute;
          width: 50px;
          height: 10px;
          background: linear-gradient(
            to right,
            #fbbf24 0%,
            #fbbf24 70%,
            #f59e0b 70%,
            #f59e0b 85%,
            #ef4444 85%
          );
          border-radius: 5px 0 0 5px;
          top: 50%;
          left: 0;
          animation: writePencil 4s ease-in-out infinite;
          z-index: 2;
        }

        .pencil::before {
          content: "";
          position: absolute;
          left: -8px;
          top: 0;
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-right: 8px solid #374151;
          z-index: 2;
        }

        .writing-line {
          position: absolute;
          height: 2px;
          background: rgba(102, 126, 234, 0.4);
          top: 50%;
          left: -8px;
          transform: translateY(-50%);
          animation: drawLine 4s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes writePencil {
          0%,
          100% {
            transform: translateX(0) translateY(-50%);
          }
          50% {
            transform: translateX(30px) translateY(-50%);
          }
        }

        @keyframes drawLine {
          0%,
          100% {
            width: 0;
          }
          50% {
            width: 70px;
          }
        }

        /* Rotating Word */
        .word-display {
          font-size: 28px;
          font-weight: bold;
          color: rgba(102, 126, 234, 0.4);
          text-align: center;
          padding: 10px;
        }

        .rotating-word {
          display: inline-block;
          animation: wordFade 2.5s ease-in-out;
        }

        @keyframes wordFade {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          20% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          80% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) rotate(10deg);
          }
        }

        /* Notebook */
        .notebook {
          width: 70px;
          height: 90px;
          background: #fef3c7;
          border-radius: 5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          padding: 15px 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          animation: floatNotebook 4s ease-in-out infinite;
          position: relative;
          margin-right: 80px;
        }

        .notebook-line {
          width: 100%;
          height: 2px;
          background: #cbd5e1;
        }

        @keyframes floatNotebook {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        /* Floating Letters */
        .floating-letters {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .float-letter {
          font-size: 20px;
          font-weight: bold;
          color: rgba(102, 126, 234, 0.3);
          animation: bounceLetters 3s ease-in-out infinite;
        }

        @keyframes bounceLetters {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        /* Stars */
        .star {
          width: 20px;
          height: 20px;
          background: #fbbf24;
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          animation: twinkleStar 2s ease-in-out infinite;
        }

        .star-1 {
          position: absolute;
          top: 15%;
          left: 35%;
          animation-delay: 0s;
        }

        .star-2 {
          position: absolute;
          bottom: 20%;
          left: 40%;
          animation-delay: 1s;
        }

        .star-3 {
          position: absolute;
          top: 20%;
          right: 35%;
          animation-delay: 0.5s;
        }

        .star-4 {
          position: absolute;
          bottom: 15%;
          right: 30%;
          animation-delay: 1.5s;
        }

        @keyframes twinkleStar {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        /* Particles */
        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: rgba(102, 126, 234, 0.4);
          border-radius: 50%;
          animation: particleFloat ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-25px);
            opacity: 0.8;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .side-container {
            width: 100px;
          }

          .left-side {
            left: 40px;
          }

          .right-side {
            right: 40px;
          }

          .english-text {
            font-size: 16px;
            letter-spacing: 3px;
          }

          .word-display {
            font-size: 18px;
          }

          .pencil {
            width: 35px;
            height: 8px;
          }

          .notebook {
            width: 50px;
            height: 70px;
            padding: 10px 7px;
          }

          .float-letter {
            font-size: 16px;
          }

          .star {
            width: 15px;
            height: 15px;
          }
        }

        @media (max-width: 480px) {
          .side-container {
            width: 80px;
          }

          .left-side {
            left: 20px;
          }

          .right-side {
            right: 20px;
          }

          .english-text {
            font-size: 12px;
            letter-spacing: 2px;
          }

          .word-display {
            font-size: 14px;
          }

          .pencil {
            width: 25px;
            height: 6px;
          }

          .notebook {
            width: 35px;
            height: 50px;
            padding: 7px 5px;
            gap: 5px;
          }

          .float-letter {
            font-size: 12px;
          }

          .star {
            width: 12px;
            height: 12px;
          }

          .floating-letters {
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAnimation;
