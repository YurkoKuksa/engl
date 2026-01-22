import { TextStyle } from "./Layout.Styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ScrollUpBtn } from "../ScrollUpButton/ScrollUpButton";
import Footer from "../Footer/Footer";

import backgrounds from "../../data/BackGround/BackGroundsList.jsx";

const Layout = () => {
  // підставляємо фон вручну:
  const backgroundType = "englCoffee";
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
