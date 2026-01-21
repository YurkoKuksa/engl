import { FileText, Settings, Wrench, AlertTriangle } from "lucide-react";

export default function ArticleContentNotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoToPublications = () => {
    window.location.href = "/engl/publications";
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
          <h1 className="text-6xl md:text-7xl font-bold text-amber-50 mb-4">
            Content Not Available
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-2">
            The article content is missing or hasn't been loaded yet
          </p>
          <p className="text-lg text-amber-200 font-light">
            This article exists but its content is currently unavailable...
          </p>
        </div>

        {/* Анімація елементів */}
        <div className="relative h-40 flex items-center justify-center my-12">
          {/* Центральна іконка AlertTriangle */}
          <div
            className="absolute"
            style={{
              animation: "pulse 2s ease-in-out infinite",
            }}
          >
            <AlertTriangle
              size={80}
              className="text-amber-100"
              strokeWidth={1.5}
            />
          </div>

          {/* Іконка документа зліва */}
          <div
            className="absolute"
            style={{
              animation: "float 3s ease-in-out infinite",
              left: "40px",
              top: "20px",
            }}
          >
            <FileText
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

          {/* Гаєчний ключ - лівий нижній */}
          <div
            className="absolute"
            style={{
              animation: "swing 3s ease-in-out infinite",
              left: "20px",
              bottom: "15px",
            }}
          >
            <Wrench
              size={45}
              className="text-amber-200 opacity-80"
              strokeWidth={1.5}
            />
          </div>

          {/* Шестерня 2 - права нижня маленька */}
          <div
            className="absolute"
            style={{
              animation: "rotateReverse 5s linear infinite",
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
            onClick={handleGoToPublications}
            className="bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <FileText size={20} />
            All Publications
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
            transform: translateY(-15px) rotate(5deg);
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
