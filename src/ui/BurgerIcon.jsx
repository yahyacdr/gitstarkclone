/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function BurgerIcon() {
  const [switchItcon, setSwitchIcon] = useState(true);
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
      onClick={() => setSwitchIcon((state) => !state)}
    >
      {switchItcon ? <Burger /> : <X />}
    </div>
  );
}

function X() {
  return (
    <div className="relative left-[1px] flex h-[25px] w-[25px] flex-col items-center justify-evenly">
      <span className="bg-type-purple animate-rotateFor absolute h-[2px] w-[17px]"></span>
      <span className="bg-type-purple animate-rotateBack absolute h-[2px] w-[17px]"></span>
    </div>
  );
}

function Burger() {
  return (
    <div className="relative left-[1px] flex h-3.5 w-6 flex-col items-center justify-between">
      <span className="bg-type-purple animate-reverseRotateBack h-[2px] w-[17px] rotate-45"></span>
      <span className="bg-type-purple animate-fadeIn h-0.5 w-[17px]"></span>
      <span className="bg-type-purple animate-reverseRotateFor h-[2px] w-[17px] -rotate-45"></span>
    </div>
  );
}
