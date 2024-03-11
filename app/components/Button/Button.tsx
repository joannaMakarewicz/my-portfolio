'client component';

import React from "react";

type ButtonProps = {
    className: string;
    buttonName: string;
}

const Button = ({className, buttonName}:ButtonProps) => {
  return (
    <div>
      <button className={className}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
