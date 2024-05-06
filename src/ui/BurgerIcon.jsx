/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function BurgerIcon() {
  const [switchItcon, setSwitchIcon] = useState(true);
  return (
    <div
      className="desktop:hidden ml-6 flex h-8 w-8 items-center justify-center justify-self-end rounded-full bg-white"
      onClick={() => setSwitchIcon((state) => !state)}
    >
      {switchItcon ? <Burger /> : <X />}
    </div>
  );
}

function X() {
  return (
    <div className="relative flex h-[25px] w-[25px] flex-col items-center justify-evenly">
      <span className="absolute h-[2px] w-[17px] animate-rotateFor bg-type-purple"></span>
      <span className="absolute h-[2px] w-[17px] animate-rotateBack bg-type-purple"></span>
    </div>
  );
}

function Burger() {
  return (
    <div className="relative flex h-3.5 w-6 max-w-[17px] flex-col items-center justify-between">
      <span className="h-[2px] w-[17px] rotate-45 animate-reverseRotateBack bg-type-purple"></span>
      <span className="h-0.5 w-[17px] animate-fadeIn bg-type-purple"></span>
      <span className="h-[2px] w-[17px] -rotate-45 animate-reverseRotateFor bg-type-purple"></span>
    </div>
  );
}
