import React, { useEffect, useState } from "react";

const LimburgCarnaval = ({ children }) => {
  const [confetti, setConfetti] = useState([]);
  const [masks, setMasks] = useState([]);
  const [balloons, setBalloons] = useState([]);
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    // Конфетті
    const confettiList = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 5,
      animationDelay: Math.random() * 4,
      size: 8 + Math.random() * 12,
      opacity: 0.7 + Math.random() * 0.3,
      color: Math.floor(Math.random() * 6), // червоний, жовтий, зелений - карнавальні кольори Лімбургу
      rotation: Math.random() * 360,
    }));
    setConfetti(confettiList);

    // Карнавальні маски
    const masksList = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 12,
      animationDelay: Math.random() * 6,
      size: 30 + Math.random() * 25,
      opacity: 0.6 + Math.random() * 0.4,
      maskType: Math.floor(Math.random() * 4),
    }));
    setMasks(masksList);

    // Повітряні кульки
    const balloonsList = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 25 + Math.random() * 20,
      opacity: 0.7 + Math.random() * 0.3,
      balloonType: Math.floor(Math.random() * 3),
    }));
    setBalloons(balloonsList);

    // Серпантин
    const streamersList = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 6 + Math.random() * 8,
      animationDelay: Math.random() * 4,
      height: 100 + Math.random() * 150,
      color: Math.floor(Math.random() * 3),
    }));
    setStreamers(streamersList);
  }, []);

  const confettiColors = [
    "#ef4444", // червоний
    "#eab308", // жовтий
    "#22c55e", // зелений
    "#f97316", // помаранчевий
    "#a855f7", // фіолетовий
    "#06b6d4", // блакитний
  ];

  const maskSymbols = ["🎭", "🤡", "👹", "🎪"];
  const balloonSymbols = ["🎈", "🎈", "🎈"];

  const streamerColors = ["#ef4444", "#eab308", "#22c55e"];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-red-600 via-yellow-400 to-green-600">
      {/* Серпантин */}
      {streamers.map((streamer) => (
        <div
          key={`streamer-${streamer.id}`}
          className="fixed animate-wave pointer-events-none z-0"
          style={{
            left: `${streamer.left}%`,
            top: "-10%",
            width: "3px",
            height: `${streamer.height}px`,
            background: `repeating-linear-gradient(
              to bottom,
              ${streamerColors[streamer.color]},
              ${streamerColors[streamer.color]} 20px,
              transparent 20px,
              transparent 30px
            )`,
            animationDuration: `${streamer.animationDuration}s`,
            animationDelay: `${streamer.animationDelay}s`,
            opacity: 0.6,
            filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
          }}
        />
      ))}

      {/* Повітряні кульки */}
      {balloons.map((balloon) => (
        <div
          key={`balloon-${balloon.id}`}
          className="fixed animate-float-up pointer-events-none z-0"
          style={{
            left: `${balloon.left}%`,
            bottom: "-10%",
            animationDuration: `${balloon.animationDuration}s`,
            animationDelay: `${balloon.animationDelay}s`,
            fontSize: `${balloon.size}px`,
            opacity: balloon.opacity,
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
          }}
        >
          {balloonSymbols[balloon.balloonType]}
        </div>
      ))}

      {/* Карнавальні маски */}
      {masks.map((mask) => (
        <div
          key={`mask-${mask.id}`}
          className="fixed animate-dance pointer-events-none z-0"
          style={{
            left: `${mask.left}%`,
            top: "-5%",
            animationDuration: `${mask.animationDuration}s`,
            animationDelay: `${mask.animationDelay}s`,
            fontSize: `${mask.size}px`,
            opacity: mask.opacity,
            filter: "drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))",
          }}
        >
          {maskSymbols[mask.maskType]}
        </div>
      ))}

      {/* Конфетті */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed animate-confetti-fall pointer-events-none z-0 rounded-sm"
          style={{
            left: `${piece.left}%`,
            top: "-5%",
            animationDuration: `${piece.animationDuration}s`,
            animationDelay: `${piece.animationDelay}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: confettiColors[piece.color],
            opacity: piece.opacity,
            transform: `rotate(${piece.rotation}deg)`,
            boxShadow: `0 0 ${piece.size / 2}px ${confettiColors[piece.color]}`,
            pointerEvents: "none",
            willChange: "transform",
          }}
        />
      ))}

      {/* Контент */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(25vh) rotate(90deg) translateX(30px);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(-20px);
          }
          75% {
            transform: translateY(75vh) rotate(270deg) translateX(25px);
          }
          100% {
            transform: translateY(100vh) rotate(360deg) translateX(0);
          }
        }

        @keyframes dance {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          20% {
            transform: translateY(20vh) translateX(-30px) rotate(-15deg);
          }
          40% {
            transform: translateY(40vh) translateX(30px) rotate(15deg);
          }
          60% {
            transform: translateY(60vh) translateX(-25px) rotate(-10deg);
          }
          80% {
            transform: translateY(80vh) translateX(20px) rotate(10deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-25vh) translateX(15px) rotate(-5deg);
          }
          50% {
            transform: translateY(-50vh) translateX(-10px) rotate(5deg);
          }
          75% {
            transform: translateY(-75vh) translateX(12px) rotate(-3deg);
          }
          100% {
            transform: translateY(-110vh) translateX(0) rotate(0deg);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(20px) rotate(5deg);
          }
          50% {
            transform: translateX(0) rotate(0deg);
          }
          75% {
            transform: translateX(-20px) rotate(-5deg);
          }
        }

        .animate-confetti-fall {
          animation: confetti-fall ease-in infinite;
        }

        .animate-dance {
          animation: dance ease-in-out infinite;
        }

        .animate-float-up {
          animation: float-up linear infinite;
        }

        .animate-wave {
          animation: wave ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LimburgCarnaval;
