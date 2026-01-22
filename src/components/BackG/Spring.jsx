import React, { useEffect, useState } from "react";

const SpringPetals = ({ children }) => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalsList = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 6 + Math.random() * 8,
      animationDelay: Math.random() * 5,
      size: 12 + Math.random() * 18,
      opacity: 0.5 + Math.random() * 0.5,
      petalType: Math.floor(Math.random() * 3), // 3 види пелюсток
      rotation: Math.random() * 360,
    }));
    setPetals(petalsList);
  }, []);

  const petalSymbols = ["🌸", "🌺", "🌼"];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-sky-300 via-pink-100 to-green-100">
      {/* Пелюстки квітів */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="fixed animate-flutter pointer-events-none z-0"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
            top: "-5%",
            filter: "drop-shadow(0 0 2px rgba(255, 182, 193, 0.5))",
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          {petalSymbols[petal.petalType]}
        </div>
      ))}

      {/* Контент */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes flutter {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(25vh) translateX(15px) rotate(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(-15px) rotate(180deg);
          }
          75% {
            transform: translateY(75vh) translateX(10px) rotate(270deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
          }
        }

        .animate-flutter {
          animation: flutter linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SpringPetals;
