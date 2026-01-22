import React, { useEffect, useState } from "react";

const UkrainianChristmas = ({ children }) => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [stars, setStars] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [kutya, setKutya] = useState([]);

  useEffect(() => {
    // Сніжинки
    const snowflakesList = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 15 + Math.random() * 20,
      opacity: 0.5 + Math.random() * 0.5,
    }));
    setSnowflakes(snowflakesList);

    // Різдвяні зірки (Вифлеємська зірка)
    const starsList = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 40,
      animationDuration: 2 + Math.random() * 3,
      animationDelay: Math.random() * 4,
      size: 14 + Math.random() * 20,
    }));
    setStars(starsList);

    // Українські різдвяні символи
    const symbolsList = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 12 + Math.random() * 15,
      animationDelay: Math.random() * 8,
      size: 25 + Math.random() * 20,
      opacity: 0.6 + Math.random() * 0.4,
      symbolType: Math.floor(Math.random() * 6),
    }));
    setSymbols(symbolsList);

    // Зернятка кутті
    const kutyaList = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 60 + Math.random() * 30,
      animationDuration: 3 + Math.random() * 4,
      animationDelay: Math.random() * 5,
      size: 6 + Math.random() * 8,
    }));
    setKutya(kutyaList);
  }, []);

  // Українські різдвяні символи
  const ukrainianSymbols = [
    "🌾", // Дідух (пшениця)
    "🕯️", // Свічка
    "🎭", // Вертеп
    "🎶", // Колядки
    "🌟", // Восьмикутна зірка
    "🏠", // Хата
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-900 via-yellow-700 to-blue-800">
      {/* Зернятка кутті внизу */}
      {kutya.map((grain) => (
        <div
          key={`kutya-${grain.id}`}
          className="fixed animate-sparkle pointer-events-none z-0"
          style={{
            left: `${grain.left}%`,
            top: `${grain.top}%`,
            animationDuration: `${grain.animationDuration}s`,
            animationDelay: `${grain.animationDelay}s`,
            fontSize: `${grain.size}px`,
            filter: "drop-shadow(0 0 3px #fbbf24)",
          }}
        >
          ✨
        </div>
      ))}

      {/* Вифлеємська зірка */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="fixed animate-twinkle pointer-events-none z-0"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
            fontSize: `${star.size}px`,
            filter: "drop-shadow(0 0 8px #fbbf24)",
          }}
        >
          ⭐
        </div>
      ))}

      {/* Українські різдвяні символи */}
      {symbols.map((symbol) => (
        <div
          key={`symbol-${symbol.id}`}
          className="fixed animate-gentle-fall pointer-events-none z-0"
          style={{
            left: `${symbol.left}%`,
            animationDuration: `${symbol.animationDuration}s`,
            animationDelay: `${symbol.animationDelay}s`,
            fontSize: `${symbol.size}px`,
            opacity: symbol.opacity,
            top: "-5%",
            filter: "drop-shadow(0 0 5px rgba(234, 179, 8, 0.6))",
          }}
        >
          {ukrainianSymbols[symbol.symbolType]}
        </div>
      ))}

      {/* Сніжинки */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="fixed animate-snowfall pointer-events-none z-0 text-white"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            top: "-5%",
            filter: "drop-shadow(0 0 4px #dbeafe)",
          }}
        >
          ❄
        </div>
      ))}

      {/* Контент */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        @keyframes gentle-fall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(25vh) translateX(20px) rotate(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(-15px) rotate(180deg);
          }
          75% {
            transform: translateY(75vh) translateX(25px) rotate(270deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-snowfall {
          animation: snowfall linear infinite;
        }

        .animate-gentle-fall {
          animation: gentle-fall ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default UkrainianChristmas;
