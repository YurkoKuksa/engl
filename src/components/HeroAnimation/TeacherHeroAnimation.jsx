import React, { useEffect, useState } from "react";

const TeacherHeroAnimation = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Fluent", "English", "ESL"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const availableWords = [0, 1, 2].filter((i) => i !== prev);
        return availableWords[
          Math.floor(Math.random() * availableWords.length)
        ];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="teacher-animation-container">
      {/* Left Side */}
      <div className="left-section">
        {/* Flying Book 1 */}
        <div className="book book-1">
          <div className="book-spine"></div>
          <div className="book-page"></div>
        </div>

        {/* Chalkboard */}
        <div className="chalkboard">
          <div className="chalk-line line-1"></div>
          <div className="chalk-line line-2"></div>
          <div className="chalk-text">ABC</div>
        </div>

        {/* Rotating Word Left */}
        <div className="word-display">
          <span key={`left-${currentWord}`} className="elegant-word">
            {words[currentWord]}
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-section">
        {/* Rotating Word Right */}
        <div className="word-display">
          <span key={`right-${currentWord}`} className="elegant-word">
            {words[currentWord]}
          </span>
        </div>

        {/* Dictionary */}
        <div className="dictionary">
          <div className="dict-cover"></div>
          <div className="dict-pages">
            <div className="page-line"></div>
            <div className="page-line"></div>
            <div className="page-line"></div>
          </div>
        </div>

        {/* Flying Book 2 */}
        <div className="book book-2">
          <div className="book-spine"></div>
          <div className="book-page"></div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="letter-particle"
          style={{
            left:
              i < 4
                ? `${5 + Math.random() * 15}%`
                : `${80 + Math.random() * 15}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {["A", "B", "C", "D", "E", "F", "G", "H"][i]}
        </div>
      ))}

      <style jsx>{`
        .teacher-animation-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        /* Sections */
        .left-section,
        .right-section {
          position: absolute;
          top: 0;
          height: 100%;
          width: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 40px 0;
        }

        .left-section {
          left: 80px;
        }

        .right-section {
          right: 80px;
        }

        /* Flying Books */
        .book {
          width: 80px;
          height: 100px;
          position: relative;
          animation: floatBook 5s ease-in-out infinite;
        }

        .book-1 {
          animation-delay: 0s;
        }

        .book-2 {
          animation-delay: 2.5s;
        }

        .book-spine {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            #92400e 0%,
            #78350f 50%,
            #92400e 100%
          );
          border-radius: 4px;
          box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .book-spine::before {
          content: "";
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: rgba(255, 255, 255, 0.3);
        }

        .book-page {
          position: absolute;
          right: -3px;
          top: 3px;
          width: 95%;
          height: 94%;
          background: #fef3c7;
          border-radius: 0 3px 3px 0;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
        }

        @keyframes floatBook {
          0%,
          100% {
            transform: translateY(0px) rotate(-2deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        /* Chalkboard */
        .chalkboard {
          width: 120px;
          height: 90px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 8px solid #78350f;
          border-radius: 4px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: floatChalkboard 6s ease-in-out infinite;
        }

        .chalk-line {
          width: 80%;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          margin: 4px 0;
        }

        .chalk-text {
          font-size: 24px;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.8);
          font-family: "Courier New", monospace;
          margin-top: 8px;
        }

        @keyframes floatChalkboard {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-1deg);
          }
        }

        /* Dictionary */
        .dictionary {
          width: 90px;
          height: 110px;
          position: relative;
          animation: floatDictionary 5.5s ease-in-out infinite;
        }

        .dict-cover {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #7c2d12 0%, #92400e 100%);
          border-radius: 4px;
          box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .dict-cover::after {
          content: "Dictionary";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(254, 243, 199, 0.9);
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .dict-pages {
          position: absolute;
          right: -2px;
          top: 2px;
          width: 92%;
          height: 96%;
          background: #fefce8;
          border-radius: 0 3px 3px 0;
          padding: 12px 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .page-line {
          width: 100%;
          height: 1.5px;
          background: rgba(120, 53, 15, 0.3);
        }

        @keyframes floatDictionary {
          0%,
          100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-18px) rotate(-3deg);
          }
        }

        /* Elegant Word Display */
        .word-display {
          font-size: 32px;
          font-weight: 600;
          text-align: center;
          padding: 15px;
          font-family: "Georgia", serif;
        }

        .elegant-word {
          display: inline-block;
          color: #78350f;
          animation: elegantFade 3s ease-in-out;
          text-shadow: 2px 2px 4px rgba(120, 53, 15, 0.2);
        }

        @keyframes elegantFade {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
          }
          15% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
        }

        /* Letter Particles */
        .letter-particle {
          position: absolute;
          font-size: 20px;
          font-weight: bold;
          color: rgba(120, 53, 15, 0.25);
          font-family: "Georgia", serif;
          animation: letterFloat ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes letterFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
            opacity: 0.4;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .left-section {
            left: 30px;
            width: 150px;
          }

          .right-section {
            right: 30px;
            width: 150px;
          }

          .book {
            width: 60px;
            height: 75px;
          }

          .chalkboard {
            width: 90px;
            height: 70px;
          }

          .dictionary {
            width: 70px;
            height: 85px;
          }

          .word-display {
            font-size: 22px;
          }

          .letter-particle {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .left-section {
            left: 10px;
            width: 100px;
          }

          .right-section {
            right: 10px;
            width: 100px;
          }

          .book {
            width: 45px;
            height: 60px;
          }

          .chalkboard {
            width: 70px;
            height: 55px;
          }

          .chalk-text {
            font-size: 16px;
          }

          .dictionary {
            width: 55px;
            height: 65px;
          }

          .word-display {
            font-size: 16px;
            padding: 10px;
          }

          .letter-particle {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default TeacherHeroAnimation;
