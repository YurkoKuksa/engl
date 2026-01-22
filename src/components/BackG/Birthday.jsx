import React, { useEffect, useState } from "react";

const Birthday = ({ children }) => {
  const [confetti, setConfetti] = useState([]);
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Confetti particles
    const confettiPieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 5,
      animationDelay: Math.random() * 3,
      size: 8 + Math.random() * 12,
      opacity: 0.6 + Math.random() * 0.4,
      color: [
        "#FF6B9D",
        "#C44569",
        "#FFA07A",
        "#FFD93D",
        "#6BCF7F",
        "#4ECDC4",
        "#95E1D3",
        "#A8E6CF",
      ][Math.floor(Math.random() * 8)],
      shape: Math.random() > 0.5 ? "circle" : "square",
    }));
    setConfetti(confettiPieces);

    // Balloons
    const balloonElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      animationDuration: 8 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 35 + Math.random() * 25,
      opacity: 0.7 + Math.random() * 0.3,
      balloon: ["🎈", "🎉", "🎁", "🎂", "🎊"][Math.floor(Math.random() * 5)],
    }));
    setBalloons(balloonElements);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={`confetti-${piece.id}`}
          className="fixed animate-confetti-fall pointer-events-none z-0"
          style={{
            left: `${piece.left}%`,
            animationDuration: `${piece.animationDuration}s`,
            animationDelay: `${piece.animationDelay}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            opacity: piece.opacity,
            top: "-5%",
            backgroundColor: piece.color,
            borderRadius: piece.shape === "circle" ? "50%" : "0%",
            transform: "rotate(45deg)",
          }}
        />
      ))}

      {/* Balloons */}
      {balloons.map((balloon) => (
        <div
          key={`balloon-${balloon.id}`}
          className="fixed animate-balloon-float pointer-events-none z-0"
          style={{
            left: `${balloon.left}%`,
            animationDuration: `${balloon.animationDuration}s`,
            animationDelay: `${balloon.animationDelay}s`,
            fontSize: `${balloon.size}px`,
            opacity: balloon.opacity,
            bottom: "-10%",
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
          }}
        >
          {balloon.balloon}
        </div>
      ))}

      {/* Sparkle effects */}
      <div className="fixed top-10 right-20 w-32 h-32 bg-yellow-300/30 rounded-full blur-2xl animate-pulse pointer-events-none z-0" />
      <div
        className="fixed bottom-20 left-20 w-40 h-40 bg-pink-400/30 rounded-full blur-2xl animate-pulse pointer-events-none z-0"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
          }
        }

        @keyframes balloonFloat {
          0% {
            transform: translateY(0) translateX(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-50vh) translateX(30px) rotate(5deg);
          }
          100% {
            transform: translateY(-110vh) translateX(-20px) rotate(-5deg);
          }
        }

        .animate-confetti-fall {
          animation: confettiFall linear infinite;
        }

        .animate-balloon-float {
          animation: balloonFloat ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
export default Birthday;
// Demo content
// export default function App() {
//   return (
//     <Birthday>
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-yellow-300">
//           <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
//             Happy Birthday!
//           </h1>
//           <p className="text-3xl text-purple-700 font-semibold mb-4">
//             Make a Wish! 🎂
//           </p>
//           <div className="mt-6 text-6xl flex justify-center gap-4">🎉🎈🎁</div>
//         </div>
//       </div>
//     </Birthday>
//   );
// }
