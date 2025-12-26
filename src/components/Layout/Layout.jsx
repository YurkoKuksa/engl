import { TextStyle } from "./Layout.Styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ScrollUpBtn } from "../ScrollUpButton/ScrollUpButton";
import Footer from "../Footer/Footer";

import BlueSnow from "../BackG/SnowingV2";
import EnglCoffee from "../BackG/EnglCoff";

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
    // christmas: {
    //   Component: ChristmasBackground,
    //   theme: "dark",
    // },
  };

  const backgroundType = "blueSnow";
  const { Component: BackgroundComponent, theme } = backgrounds[backgroundType];
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
