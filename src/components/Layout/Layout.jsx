import { Suspense } from "react";
import { LayoutContainer } from "./Layout.Styled";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ScrollUpBtn } from "../ScrollUpButton/ScrollUpButton";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
        <ScrollUpBtn />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
