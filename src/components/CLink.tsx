import React, { ReactNode } from "react";
import { NavLink, To } from "react-router-dom";

interface Props {
  to: To;
  children: ReactNode;
  className?: string;
}

const CLink = (props: Props) => (
  <NavLink end to={props.to} className={({isActive}) => `px-4 py-3 transition-colors duration-150  text-white rounded ${props.className} ${isActive ? "bg-red-500" : "bg-blue-500 hover:bg-blue-700"}`}>
    {props.children}
  </NavLink>
);

export default CLink;
