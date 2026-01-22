import { TextStyle } from "./Layout.Styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ScrollUpBtn } from "../ScrollUpButton/ScrollUpButton";
import Footer from "../Footer/Footer";

import backgrounds from "../../data/BackGround/BackGroundsList";
import specialDates from "../../data/BackGround/SpacialDates";

const Layout = () => {
  const isDateInRange = (month, day, from, to) => {
    const current = month * 100 + day;
    const start = from[0] * 100 + from[1];
    const end = to[0] * 100 + to[1];

    return current >= start && current <= end;
  };

  const getSpecialTheme = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const match = specialDates.find(({ from, to }) =>
      isDateInRange(month, day, from, to),
    );

    return match?.theme || null;
  };

  const getSeasonalTheme = () => {
    const specialTheme = getSpecialTheme();
    if (specialTheme) return specialTheme;

    const now = new Date();
    const month = now.getMonth() + 1;

    if (month === 12 || month === 1 || month === 2) return "blueSnow";
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 7) return "summer";
    if (month >= 10 && month <= 11) return "autumn";

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
