import { Suspense } from "react";
import { LayoutContainer } from "./Layout.Styled";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
        <p>Layout</p>
      </LayoutContainer>
    </>
  );
};

export default Layout;
