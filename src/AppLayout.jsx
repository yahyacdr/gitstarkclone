/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
const linearHeaderPages = ["support"];
const BgBlueHeaderPages = ["/"];

export default function AppLayout() {
  const location = useLocation();
  const isLinearHeader = linearHeaderPages.includes(location.pathname);
  const isBgBlue = BgBlueHeaderPages.includes(location.pathname);

  return (
    <>
      <Header isLinear={isLinearHeader} useBgColor={isBgBlue} />
      <Outlet />
    </>
  );
}
