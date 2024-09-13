import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { HeaderColorProvider } from "../context/HeaderContext";

function MainLayout() {
  return (
    <HeaderColorProvider>
      <Header />
      <Outlet />
    </HeaderColorProvider>
  );
}

export default MainLayout;
