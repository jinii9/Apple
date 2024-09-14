import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderColorProvider, useHeaderColor } from "../context/HeaderContext";

function MainLayout() {
  const { setHeaderColor } = useHeaderColor();
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
      <Outlet />
    </>
  );
}

export default MainLayout;
