import { TextStyle } from "./Layout.Styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ScrollUpBtn } from "../ScrollUpButton/ScrollUpButton";
import Footer from "../Footer/Footer";

import backgrounds from "../../data/BackGround/BackGroundsList.jsx";

const Layout = () => {
  const getSeasonalTheme = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // 🎄 Різдво (20–23 грудня)
    if (month === 12 && day >= 20 && day <= 23) {
      return "christmas";
    }

    // 🎄 Різдво Укр Тематика (24–26 грудня)
    if (month === 12 && day >= 24 && day <= 26) {
      return "christukr";
    }

    // ❄️ Новий рік (1 січня)

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

    // День Народження (7 травня)
    if (month === 5 && day >= 7 && day <= 10) {
      return "bday";
    }

    // 🌿 Купала (20–25 червня)
    if (month === 6 && day >= 20 && day <= 25) {
      return "kupala";
    }

    // ☀️ Літо (червень–серпень)
    if (month >= 6 && month <= 8) {
      return "summer";
    }

    // 🍂 Осінь (жовтень–листопад)
    if (month >= 10 && month <= 11) {
      return "autumn";
    }

    // ☕ За замовчуванням
    return "englCoffee";
  };

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
