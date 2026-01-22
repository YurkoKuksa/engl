import { TextStyle } from "./Layout.Styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ScrollUpBtn } from "../ScrollUpButton/ScrollUpButton";
import Footer from "../Footer/Footer";

import BlueSnow from "../BackG/SnowingV2";
import EnglCoffee from "../BackG/EnglCoff";
import ValentDay from "../BackG/ValentinesDay";
import Spring from "../BackG/Spring";
import Autumn from "../BackG/Autumn";
import Summer from "../BackG/Summer";
import Kupala from "../BackG/Kupala.jsx";
import Christmas from "../BackG/Christmas.jsx";
import ChristmasUkr from "../BackG/ChristmasUkr.jsx";
import Carnaval from "../BackG/Carnaval.jsx";

const Layout = () => {
  const backgrounds = {
    blueSnow: {
      Component: BlueSnow,
      theme: "dark",
    },
    englCoffee: {
      Component: EnglCoffee,
      theme: "light",
    },
    love: {
      Component: ValentDay,
      theme: "light",
    },
    spring: {
      Component: Spring,
      theme: "light",
    },
    autumn: {
      Component: Autumn,
      theme: "light",
    },
    summer: {
      Component: Summer,
      theme: "light",
    },
    kupala: {
      Component: Kupala,
      theme: "dark",
    },
    christmas: {
      Component: Christmas,
      theme: "dark",
    },
    christukr: {
      Component: ChristmasUkr,
      theme: "dark",
    },
    carnav: {
      Component: Carnaval,
      theme: "light",
    },
  };

  const getSeasonalTheme = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // 🎄 Різдво (24–26 грудня)
    if (month === 12 && day >= 24 && day <= 26) {
      return "christmas";
    }

    // ❄️ Новий рік (27 грудня – 7 січня)
    if ((month === 12 && day >= 27) || (month === 1 && day <= 7)) {
      return "blueSnow";
    }

    // ❤️ День закоханих (14–15 лютого)
    if (month === 2 && day >= 14 && day <= 15) {
      return "love";
    }

    // 🎭 Карнавал (16–17 лютого)
    if (month === 2 && day >= 16 && day <= 17) {
      return "carnav";
    }

    // ❄️ Зима (грудень, січень, лютий)
    if (month === 12 || month === 1 || month === 2) {
      return "blueSnow";
    }

    // 🌸 Весна (березень–травень)
    if (month >= 3 && month <= 5) {
      return "spring";
    }

    // 🌿 Купала (20–25 червня)
    if (month === 6 && day >= 20 && day <= 25) {
      return "kupala";
    }

    // ☀️ Літо (червень–серпень)
    if (month >= 6 && month <= 8) {
      return "summer";
    }

    // 🍂 Осінь (вересень–листопад)
    if (month >= 9 && month <= 11) {
      return "autumn";
    }

    // ☕ За замовчуванням
    return "englCoffee";
  };

  // Використовуємо сезонну тему, якщо не вказана в даних
  const backgroundType = getSeasonalTheme();
  const { Component: BackgroundComponent, theme } = backgrounds[backgroundType];

  if (process.env.NODE_ENV === "development") {
    console.log("🧪 DEBUG:");
    console.log("Date:", new Date().toLocaleDateString());
    console.log("Background:", backgroundType);
    console.log("Theme:", backgrounds[backgroundType].theme);
  }

  return (
    <>
      <BackgroundComponent>
        <Header theme={theme} />
        <TextStyle $theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet context={{ theme }} />
          </Suspense>
        </TextStyle>
      </BackgroundComponent>
      <ScrollUpBtn />
      <Footer />
    </>
  );
};

export default Layout;
