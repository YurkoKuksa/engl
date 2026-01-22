import React, { useEffect, useState } from "react";

const SummerButterflies = ({ children }) => {
  const [butterflies, setButterflies] = useState([]);
  const [sunrays, setSunrays] = useState([]);

  useEffect(() => {
    const butterfliesList = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 12,
      animationDelay: Math.random() * 8,
      size: 20 + Math.random() * 15,
      opacity: 0.7 + Math.random() * 0.3,
      butterflyType: Math.floor(Math.random() * 3),
    }));
    setButterflies(butterfliesList);

    const raysList = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 4 + Math.random() * 6,
      animationDelay: Math.random() * 4,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setSunrays(raysList);
  }, []);

  const butterflySymbols = ["🦋", "🦋", "🐝"];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-cyan-400 via-yellow-200 to-lime-300">
      {/* Сонячні промені */}
      {sunrays.map((ray) => (
        <div
          key={`ray-${ray.id}`}
          className="fixed animate-shimmer pointer-events-none z-0"
          style={{
            left: `${ray.left}%`,
            animationDuration: `${ray.animationDuration}s`,
            animationDelay: `${ray.animationDelay}s`,
            opacity: ray.opacity,
            top: "0",
            width: "2px",
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8), transparent)",
          }}
        />
      ))}

      {/* Метелики */}
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="fixed animate-fly pointer-events-none z-0"
          style={{
            left: `${butterfly.left}%`,
            animationDuration: `${butterfly.animationDuration}s`,
            animationDelay: `${butterfly.animationDelay}s`,
            fontSize: `${butterfly.size}px`,
            opacity: butterfly.opacity,
            top: `${20 + Math.random() * 60}%`,
            filter: "drop-shadow(0 0 4px rgba(139, 92, 246, 0.3))",
          }}
        >
          {butterflySymbols[butterfly.butterflyType]}
        </div>
      ))}

      {/* Контент */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes fly {
          0% {
            transform: translateX(-100vw) translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateX(-25vw) translateY(-40px) rotate(10deg) scale(1.1);
          }
          50% {
            transform: translateX(25vw) translateY(20px) rotate(-5deg) scale(0.9);
          }
          75% {
            transform: translateX(75vw) translateY(-30px) rotate(8deg) scale(1.05);
          }
          100% {
            transform: translateX(150vw) translateY(10px) rotate(0deg) scale(1);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fly {
          animation: fly ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SummerButterflies;
