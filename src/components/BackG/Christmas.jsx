import React, { useEffect, useState } from "react";

const ChristmasMagic = ({ children }) => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [stars, setStars] = useState([]);
  const [lights, setLights] = useState([]);

  useEffect(() => {
    // Сніжинки
    const snowflakesList = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 15 + Math.random() * 20,
      opacity: 0.5 + Math.random() * 0.5,
    }));
    setSnowflakes(snowflakesList);

    // Різдвяні зірки
    const starsList = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 50,
      animationDuration: 2 + Math.random() * 3,
      animationDelay: Math.random() * 4,
      size: 12 + Math.random() * 18,
    }));
    setStars(starsList);

    // Святкові вогники
    const lightsList = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 10 + Math.random() * 80,
      animationDuration: 1.5 + Math.random() * 2,
      animationDelay: Math.random() * 3,
      size: 8 + Math.random() * 12,
      color: Math.floor(Math.random() * 5), // 5 кольорів
    }));
    setLights(lightsList);
  }, []);

  const lightColors = [
    { color: "#ef4444", shadow: "rgba(239, 68, 68, 0.8)" }, // червоний
    { color: "#22c55e", shadow: "rgba(34, 197, 94, 0.8)" }, // зелений
    { color: "#eab308", shadow: "rgba(234, 179, 8, 0.8)" }, // жовтий
    { color: "#3b82f6", shadow: "rgba(59, 130, 246, 0.8)" }, // синій
    { color: "#f97316", shadow: "rgba(249, 115, 22, 0.8)" }, // помаранчевий
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-950 via-red-950 to-green-950">
      {/* Різдвяні зірки */}
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
            filter: "drop-shadow(0 0 6px #fbbf24)",
          }}
        >
          ⭐
        </div>
      ))}

      {/* Святкові вогники */}
      {lights.map((light) => (
        <div
          key={`light-${light.id}`}
          className="fixed animate-blink pointer-events-none z-0 rounded-full"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            animationDuration: `${light.animationDuration}s`,
            animationDelay: `${light.animationDelay}s`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            backgroundColor: lightColors[light.color].color,
            boxShadow: `0 0 ${light.size * 2}px ${lightColors[light.color].shadow}`,
          }}
        />
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
            filter: "drop-shadow(0 0 4px #93c5fd)",
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

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .animate-snowfall {
          animation: snowfall linear infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-blink {
          animation: blink ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ChristmasMagic;
