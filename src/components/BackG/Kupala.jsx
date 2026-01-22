import React, { useEffect, useState } from "react";

const KupalaFire = ({ children }) => {
  const [sparks, setSparks] = useState([]);
  const [wreaths, setWreaths] = useState([]);
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    // Вогняні іскри
    const sparksList = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: 45 + Math.random() * 10, // Центр екрану
      animationDuration: 2 + Math.random() * 3,
      animationDelay: Math.random() * 4,
      size: 8 + Math.random() * 12,
      opacity: 0.6 + Math.random() * 0.4,
      sparkType: Math.floor(Math.random() * 2),
    }));
    setSparks(sparksList);

    // Вінки на воді
    const wreathsList = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 10,
      animationDelay: Math.random() * 8,
      size: 25 + Math.random() * 15,
      opacity: 0.8 + Math.random() * 0.2,
    }));
    setWreaths(wreathsList);

    // Світлячки
    const fireflyList = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 20 + Math.random() * 60,
      animationDuration: 3 + Math.random() * 4,
      animationDelay: Math.random() * 5,
      size: 6 + Math.random() * 8,
    }));
    setFireflies(fireflyList);
  }, []);

  const sparkSymbols = ["✨", "🔥"];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-blue-950">
      {/* Світлячки */}
      {fireflies.map((firefly) => (
        <div
          key={`firefly-${firefly.id}`}
          className="fixed animate-glow pointer-events-none z-0"
          style={{
            left: `${firefly.left}%`,
            top: `${firefly.top}%`,
            animationDuration: `${firefly.animationDuration}s`,
            animationDelay: `${firefly.animationDelay}s`,
            fontSize: `${firefly.size}px`,
            filter: "drop-shadow(0 0 8px #fbbf24) blur(1px)",
          }}
        >
          ✨
        </div>
      ))}

      {/* Вогняні іскри */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed animate-rise pointer-events-none z-0"
          style={{
            left: `${spark.left}%`,
            bottom: "-5%",
            animationDuration: `${spark.animationDuration}s`,
            animationDelay: `${spark.animationDelay}s`,
            fontSize: `${spark.size}px`,
            opacity: spark.opacity,
            filter: "drop-shadow(0 0 6px #f97316) brightness(1.2)",
          }}
        >
          {sparkSymbols[spark.sparkType]}
        </div>
      ))}

      {/* Вінки на воді */}
      {wreaths.map((wreath) => (
        <div
          key={`wreath-${wreath.id}`}
          className="fixed animate-float pointer-events-none z-0"
          style={{
            left: `${wreath.left}%`,
            bottom: "5%",
            animationDuration: `${wreath.animationDuration}s`,
            animationDelay: `${wreath.animationDelay}s`,
            fontSize: `${wreath.size}px`,
            opacity: wreath.opacity,
            filter: "drop-shadow(0 0 4px #8b5cf6)",
          }}
        >
          💐
        </div>
      ))}

      {/* Контент */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-40vh) translateX(20px) rotate(180deg) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-80vh) translateX(-15px) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes float {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(15px) translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateX(30px) translateY(5px) rotate(-3deg);
          }
          75% {
            transform: translateX(45px) translateY(-8px) rotate(4deg);
          }
          100% {
            transform: translateX(60px) translateY(0) rotate(0deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-15px);
          }
        }

        .animate-rise {
          animation: rise ease-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-glow {
          animation: glow ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default KupalaFire;
