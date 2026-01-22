import React, { useEffect, useState } from "react";

const FallingLeaves = ({ children }) => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const leavesList = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 7 + Math.random() * 10,
      animationDelay: Math.random() * 6,
      size: 18 + Math.random() * 22,
      opacity: 0.6 + Math.random() * 0.4,
      leafType: Math.floor(Math.random() * 4), // 4 види листя
      rotation: Math.random() * 360,
    }));
    setLeaves(leavesList);
  }, []);

  const leafSymbols = ["🍂", "🍁", "🍃", "🌾"];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-orange-200 via-amber-300 to-yellow-600">
      {/* Осіннє листя */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="fixed animate-drift pointer-events-none z-0"
          style={{
            left: `${leaf.left}%`,
            animationDuration: `${leaf.animationDuration}s`,
            animationDelay: `${leaf.animationDelay}s`,
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            top: "-5%",
            filter: "drop-shadow(0 0 3px rgba(194, 65, 12, 0.4))",
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          {leafSymbols[leaf.leafType]}
        </div>
      ))}

      {/* Контент */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes drift {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          20% {
            transform: translateY(20vh) translateX(-30px) rotate(72deg);
          }
          40% {
            transform: translateY(40vh) translateX(25px) rotate(144deg);
          }
          60% {
            transform: translateY(60vh) translateX(-20px) rotate(216deg);
          }
          80% {
            transform: translateY(80vh) translateX(15px) rotate(288deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
          }
        }

        .animate-drift {
          animation: drift ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FallingLeaves;
