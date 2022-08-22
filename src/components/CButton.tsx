import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const CButton = (props: Props) => (
  <button
    className={`px-4 py-3 transition-colors duration-150 bg-blue-500 hover:bg-blue-700 text-white rounded ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default CButton;
