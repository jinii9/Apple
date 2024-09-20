import React from "react";

function ParentContainer({ children }) {
  return <div className="w-full mx-auto bg-gray-900">{children}</div>;
}

export default ParentContainer;
