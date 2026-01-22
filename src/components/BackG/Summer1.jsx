import React, { useEffect, useState } from "react";

const Summer = ({ children }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const summerElements = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 15,
      animationDelay: Math.random() * 8,
      size: 20 + Math.random() * 30,
      opacity: 0.4 + Math.random() * 0.5,
      element: ["☀️", "🌻", "🦋", "🌺", "🍉", "🌴"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setElements(summerElements);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-sky-300 via-amber-200 to-yellow-100">
      {/* Floating summer elements */}
      {elements.map((item) => (
        <div
          key={item.id}
          className="fixed animate-summer-drift pointer-events-none z-0"
          style={{
            left: `${item.left}%`,
            animationDuration: `${item.animationDuration}s`,
            animationDelay: `${item.animationDelay}s`,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            top: "-5%",
            filter: "drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))",
          }}
        >
          {item.element}
        </div>
      ))}

      {/* Sun rays effect */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
      <div
        className="fixed bottom-0 left-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse pointer-events-none z-0"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes summerDrift {
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

        .animate-summer-drift {
          animation: summerDrift ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
export default Summer;
// Demo content
// export default function App() {
//   return (
//     <Summer>
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-amber-300">
//           <h1 className="text-6xl font-bold text-orange-600 mb-4">
//             Summer Vibes
//           </h1>
//           <p className="text-2xl text-amber-700 font-semibold">
//             Enjoy the Sunshine
//           </p>
//           <div className="mt-6 text-5xl flex justify-center gap-4">☀️🌴🍉</div>
//         </div>
//       </div>
//     </Summer>
//   );
// }
