import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.js";
import StorePage from "./pages/StorePage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* store */}
          <Route path="/store" element={<StorePage />}></Route>
          {/* detail */}

          {/* map */}
          {/* cart */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
