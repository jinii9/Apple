import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

import {
  HeaderMenuProvider,
  useHeaderColor,
  useHeaderMenu,
} from "../context/HeaderContext";

function MainLayout() {
  const { setHeaderColor } = useHeaderColor();
  const { hoveredMenu } = useHeaderMenu();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHeaderColor({
        backColor: "rgba(22, 22, 23, .8)",
        textColor: "#fff",
      });
    } else {
      setHeaderColor({
        backColor: "#ffffff",
        textColor: "#000000",
      });
    }
  }, [location, setHeaderColor]);

  return (
    <>
      <Header />
      <div
        className={`relative ${
          hoveredMenu ? "blur-sm" : ""
        } transition-all duration-300 ease-in-out`}
      >
        <Outlet />
      </div>
       <Footer/>
    </>
  );
}

export default MainLayout;
