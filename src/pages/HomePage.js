import React, { useEffect } from "react";
import { useHeaderColor } from "../context/HeaderContext";

function HomePage() {
  const { setHeaderBackColor, setHeaderTextColor } = useHeaderColor();

  useEffect(() => {
    setHeaderBackColor("rgba(22, 22, 23, .8)");
    setHeaderTextColor("#fff");
  }, []);

  return <div>HOMEPAGE</div>;
}

export default HomePage;
