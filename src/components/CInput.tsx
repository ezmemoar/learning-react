import React, { ChangeEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
  containerClassname?: string;
  type?: string;
  placeholder?: string;
}

const CInput = (props: Props) => (
  <div className={props.containerClassname}>
    <input
      name={props.name}
      type={props.type ?? "text"}
      className="border border-slate-300 px-6 py-3 rounded w-full"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder ?? props.name}
    />
  </div>
);

export default CInput;
