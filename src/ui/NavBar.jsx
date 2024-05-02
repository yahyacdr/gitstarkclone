/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Btn from "./Btn";
import BurgerIcon from "./BurgerIcon";

export default function NavBar() {
  return (
    <div className="mb-4 flex w-full items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <Btn type="white">Start Free trial</Btn>
      <BurgerIcon />
    </div>
  );
}
