import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="text-2xl bg-gray-400">{props.label}</button>;
};

export default Button;
