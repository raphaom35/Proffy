import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface ImputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Imput: React.FC<ImputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Imput;
