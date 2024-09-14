import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.js";
import {
  HeaderColorProvider,
  HeaderMenuProvider,
} from "./context/HeaderContext.js";
import CartPage from "./pages/CartPage.js";

function App() {
  return (
    <HeaderColorProvider>
      <HeaderMenuProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* store */}
            {/* detail */}

            {/* map */}
            {/* cart */}
            <Route path="/shop/bag" element={<CartPage />} />
          </Route>
        </Routes>
      </HeaderMenuProvider>
    </HeaderColorProvider>
  );
}

export default App;
