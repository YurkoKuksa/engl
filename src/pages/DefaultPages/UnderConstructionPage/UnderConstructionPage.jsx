import React from "react";
import { Wrench, Settings, Code } from "lucide-react";

export default function UnderConstruction() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        background:
          "linear-gradient(135deg, #8B6F47 0%, #6F4E37 50%, #5C4033 100%)",
      }}
    >
      <div className="text-center space-y-12 z-10 max-w-2xl">
        {/* Заголовок */}
        <h1 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4">
          Sorry!
        </h1>
        <p className="text-2xl md:text-3xl text-amber-100 mb-8">
          This page is under construction
        </p>

        {/* Анімація інструментів розробки */}
        <div className="relative h-40 flex items-center justify-center my-12">
          {/* Гайковий ключ */}
          <div
            className="absolute"
            style={{
              animation: "rotate 4s ease-in-out infinite",
            }}
          >
            <Wrench size={80} className="text-amber-100" strokeWidth={1.5} />
          </div>

          {/* Шестерня 1 */}
          <div
            className="absolute"
            style={{
              animation: "rotateReverse 6s linear infinite",
              left: "60px",
              top: "20px",
            }}
          >
            <Settings
              size={50}
              className="text-amber-200 opacity-70"
              strokeWidth={1.5}
            />
          </div>

          {/* Шестерня 2 */}
          <div
            className="absolute"
            style={{
              animation: "rotate 5s linear infinite",
              right: "60px",
              bottom: "20px",
            }}
          >
            <Settings
              size={45}
              className="text-amber-200 opacity-60"
              strokeWidth={1.5}
            />
          </div>

          {/* Код символ */}
          <div
            className="absolute"
            style={{
              animation: "float 3s ease-in-out infinite",
              left: "40px",
              bottom: "10px",
            }}
          >
            <Code
              size={40}
              className="text-amber-300 opacity-80"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <p className="text-amber-200 text-lg font-light">
          We're building something great...
        </p>

        {/* Кнопка повернення */}
        <button
          onClick={handleGoBack}
          className="bg-amber-800 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-8"
        >
          ← Go Back
        </button>
      </div>

      {/* CSS анімації */}
      <style jsx>{`
        @keyframes rotate {
          0%,
          100% {
            transform: rotate(0deg) translateY(0px);
          }
          25% {
            transform: rotate(-15deg) translateY(-5px);
          }
          75% {
            transform: rotate(15deg) translateY(-5px);
          }
        }

        @keyframes rotateReverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
