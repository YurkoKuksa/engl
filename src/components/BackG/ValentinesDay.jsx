import React, { useEffect, useState } from "react";

const ValentinesDay = ({ children }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartShapes = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 6 + Math.random() * 12,
      animationDelay: Math.random() * 6,
      size: 18 + Math.random() * 28,
      opacity: 0.3 + Math.random() * 0.5,
      heartType: Math.random() > 0.5 ? "❤" : "💕",
    }));
    setHearts(heartShapes);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-pink-100 via-rose-200 to-red-100">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed animate-float-up pointer-events-none z-0"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            bottom: "-5%",
            filter: "drop-shadow(0 0 4px rgba(244, 63, 94, 0.4))",
          }}
        >
          {heart.heartType}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-50vh) rotate(180deg) scale(1.1);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg) scale(0.8);
          }
        }

        .animate-float-up {
          animation: floatUp ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ValentinesDay;

// Demo content
// export default function App() {
//   return (
//     <ValentinesDay>
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-pink-300">
//           <h1 className="text-6xl font-bold text-rose-600 mb-4">
//             Happy Valentine's Day
//           </h1>
//           <p className="text-2xl text-pink-700 font-semibold">February 14th</p>
//           <div className="mt-6 text-5xl">💖</div>
//         </div>
//       </div>
//     </ValentinesDay>
//   );
// }
