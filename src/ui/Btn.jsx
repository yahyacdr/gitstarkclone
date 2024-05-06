/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function Btn({ type, children, to, className }) {
  const base =
    "font-rubik rounded-md border-2 border-transparent align-middle transition-opacity hover:opacity-90 focus:opacity-90";
  const styles = {
    gold:
      base +
      " bg-gold text-indi font-regular transition-opacity duration-200 text-md py-1.5 px-6 ease whitespace-nowrap will-change-opacity inline-flex",
    white:
      base +
      " bg-white text-type-purple font-bold px-2.5 py-[3px] py-0.7 uppercase text-sm",
    purple: base + " bg-type-purple text-white px-6 py-1.5",
    custom: "",
  };
  if (to)
    return (
      <Link className={styles[type] + (className || "")} to={to}>
        {children}
      </Link>
    );
  return <button className={styles[type]}>{children}</button>;
}
