import React from "react";
import { AlertCircle, Home, Search, MapPin } from "lucide-react";

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

        {/* Анімація елементів пошуку */}
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

          {/* Іконка пошуку */}
          <div
            className="absolute"
            style={{
              animation: "float 3s ease-in-out infinite",
              left: "50px",
              top: "10px",
            }}
          >
            <Search
              size={45}
              className="text-amber-200 opacity-70"
              strokeWidth={1.5}
            />
          </div>

          {/* Іконка карти 1 */}
          <div
            className="absolute"
            style={{
              animation: "floatSlow 4s ease-in-out infinite",
              right: "40px",
              top: "30px",
            }}
          >
            <MapPin
              size={50}
              className="text-amber-300 opacity-60"
              strokeWidth={1.5}
            />
          </div>

          {/* Іконка будинку */}
          <div
            className="absolute"
            style={{
              animation: "float 3.5s ease-in-out infinite 0.5s",
              left: "30px",
              bottom: "20px",
            }}
          >
            <Home
              size={40}
              className="text-amber-200 opacity-80"
              strokeWidth={1.5}
            />
          </div>

          {/* Додаткова іконка карти */}
          <div
            className="absolute"
            style={{
              animation: "floatSlow 4.5s ease-in-out infinite 1s",
              right: "60px",
              bottom: "10px",
            }}
          >
            <MapPin
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
}
