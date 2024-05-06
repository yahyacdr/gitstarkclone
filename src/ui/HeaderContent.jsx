/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function HeaderContent({ children, isCentered }) {
  return (
    <div
      className={`flex flex-col content-between items-center font-rubik ${isCentered ? "justify-center" : "justify-start"}`}
    >
      {children}
    </div>
  );
}
