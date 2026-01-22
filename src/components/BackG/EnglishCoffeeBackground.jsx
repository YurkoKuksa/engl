import React, { useEffect, useState } from "react";

const EnglishCoffeeBackground = ({ children }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Падаючі англійські букви та слова
    const letterElements = Array.from({ length: 35 }, (_, i) => {
      const items = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "read",
        "write",
        "speak",
        "learn",
        "USA",
        "NYC",
        "hello",
        "world",
        "📚",
        "✍️",
        "🎓",
        "🗽",
        "study",
        "book",
      ];
      return {
        id: i,
        content: items[Math.floor(Math.random() * items.length)],
        left: Math.random() * 100,
        animationDuration: 15 + Math.random() * 20,
        animationDelay: Math.random() * 10,
        fontSize: 14 + Math.random() * 24,
        opacity: 0.12 + Math.random() * 0.18,
      };
    });
    setElements(letterElements);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Багатошаровий градієнт для глибини */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-orange-800/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-800/15 via-transparent to-amber-700/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent"></div>

      {/* М'яке віньєтування по краях */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(180,83,9,0.15)]"></div>

      {/* Падаючі англійські елементи */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="fixed animate-float-fade pointer-events-none z-0 font-serif font-semibold"
          style={{
            left: `${element.left}%`,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.animationDelay}s`,
            fontSize: `${element.fontSize}px`,
            "--element-opacity": element.opacity,
            top: "-10%",
            color: "#92400e",
          }}
        >
          {element.content}
        </div>
      ))}

      {/* Контент користувача */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes float-fade {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: var(--element-opacity);
          }
          50% {
            opacity: calc(var(--element-opacity) * 0.4);
          }
          95% {
            opacity: var(--element-opacity);
          }
          100% {
            transform: translateY(110vh) rotate(180deg);
            opacity: 0;
          }
        }

        .animate-float-fade {
          animation: float-fade linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EnglishCoffeeBackground;
