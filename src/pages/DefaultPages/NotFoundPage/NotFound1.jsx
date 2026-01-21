import React from "react";
import { AlertCircle, Home, Settings, Wrench } from "lucide-react";

export default function PageNotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/engl";
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        background:
          "linear-gradient(135deg, #8B6F47 0%, #6F4E37 50%, #5C4033 100%)",
        opacity: 0.95,
      }}
    >
      <div className="text-center space-y-12 z-10 max-w-2xl">
        {/* Заголовок */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold text-amber-50 mb-4">
            404
          </h1>
          <p className="text-2xl md:text-3xl text-amber-100 mb-2">
            Oops! Page Not Found
          </p>
          <p className="text-lg text-amber-200 font-light">
            The page you're looking for seems to have wandered off...
          </p>
        </div>

        {/* Анімація елементів */}
        <div className="relative h-40 flex items-center justify-center my-12">
          {/* Центральна іконка Alert */}
          <div
            className="absolute"
            style={{
              animation: "pulse 2s ease-in-out infinite",
            }}
          >
            <AlertCircle
              size={80}
              className="text-amber-100"
              strokeWidth={1.5}
            />
          </div>

          {/* Гаєчний ключ зліва */}
          <div
            className="absolute"
            style={{
              animation: "swing 3s ease-in-out infinite",
              left: "40px",
              top: "20px",
            }}
          >
            <Wrench
              size={55}
              className="text-amber-200 opacity-70"
              strokeWidth={1.5}
            />
          </div>

          {/* Шестерня 1 - права верхня */}
          <div
            className="absolute"
            style={{
              animation: "rotate 6s linear infinite",
              right: "50px",
              top: "10px",
            }}
          >
            <Settings
              size={50}
              className="text-amber-300 opacity-60"
              strokeWidth={1.5}
            />
          </div>

          {/* Шестерня 2 - ліва нижня */}
          <div
            className="absolute"
            style={{
              animation: "rotateReverse 5s linear infinite",
              left: "20px",
              bottom: "15px",
            }}
          >
            <Settings
              size={45}
              className="text-amber-200 opacity-80"
              strokeWidth={1.5}
            />
          </div>

          {/* Шестерня 3 - права нижня маленька */}
          <div
            className="absolute"
            style={{
              animation: "rotate 4s linear infinite",
              right: "30px",
              bottom: "20px",
            }}
          >
            <Settings
              size={35}
              className="text-amber-300 opacity-50"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button
            onClick={handleGoBack}
            className="bg-amber-800 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ← Go Back
          </button>
          <button
            onClick={handleGoHome}
            className="bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Home size={20} />
            Go Home
          </button>
        </div>
      </div>

      {/* CSS анімації */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes swing {
          0%,
          100% {
            transform: rotate(-10deg) translateY(0px);
          }
          50% {
            transform: rotate(10deg) translateY(-10px);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
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
      `}</style>
    </div>
  );
}
