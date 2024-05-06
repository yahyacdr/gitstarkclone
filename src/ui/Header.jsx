/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";
import Btn from "./Btn";

export default function LinearHeader({ isLinear, useBgColor }) {
  console.log(isLinear, useBgColor);
  return (
    <header className="relative flex w-full flex-col items-center justify-between bg-type-purple px-4 pt-4">
      <NavBar />
      {isLinear && <LinearBg />}
      {!isLinear && useBgColor && (
        <BaseBg>
          <div className="pt-12">
            <div className="mb-6 flex flex-col justify-center sm:mb-[20rem]">
              <ColorBg />
              <div className="relative flex flex-wrap items-center justify-center gap-4 pb-12">
                <Btn type={"gold"}>Sign up for free</Btn>
              </div>
            </div>
            <div className="-mt-11 flex items-center justify-center">
              <img
                src="https://images.getstark.co/marketing/headers/homepage-header-2023-4.webp"
                alt=""
                className="pointer-events-none absolute bottom-0 hidden w-full min-w-[1440px] max-w-[1440px] -translate-x-6 sm:block"
              ></img>
            </div>
          </div>
        </BaseBg>
      )}
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

function BaseBg({ children }) {
  return (
    <div className="desktop:bg-linearBg h-full w-screen bg-cover bg-bottom bg-no-repeat">
      {children}
    </div>
  );
}

function ColorBg() {
  return (
    <div className="h-full w-screen bg-cover bg-bottom bg-no-repeat">
      <HeaderContent isCentered={true}>
        <h1 className="max-w-[650px] text-center text-[3.5rem] font-bold leading-[1.1] -tracking-[0.1rem] text-white sm:!text-[102px] sm:!leading-[110px] md:text-7xl">
          Super&shy;charge Access&shy;iblity
        </h1>
        <p className="mb-8 mt-4 max-w-[600px] px-2 text-center text-xl text-white">
          {`The world’s best companies – from startups to the Fortune 100 – trust
          Stark to accelerate time to digital accessibility compliance.`}
        </p>
      </HeaderContent>
    </div>
  );
}
