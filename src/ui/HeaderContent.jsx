/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function HeaderContent({ children, isCentered }) {
  return (
    <div
      className={`font-rubik flex flex-col content-between ${isCentered ? "justify-center" : "justify-start"}`}
    >
      {children}
    </div>
  );
}
