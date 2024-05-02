/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NavBar from "./NavBar";

export default function LinearHeader({ isLinear, useBgColor }) {
  return (
    <header className="relative flex w-full flex-col items-center justify-between bg-type-purple px-4 pt-4">
      <NavBar />
      {isLinear && <LinearBg />}
      {!isLinear && !useBgColor && <BaseBg />}
    </header>
  );
}

function LinearBg() {
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://images.getstark.co/marketing/headers/gradient-bg.webp"
        )`,
      }}
      className="h-full w-screen bg-cover bg-bottom bg-no-repeat"
    ></div>
  );
}

function BaseBg() {
  return (
    <div className="h-full w-screen bg-white bg-cover bg-bottom bg-no-repeat"></div>
  );
}
