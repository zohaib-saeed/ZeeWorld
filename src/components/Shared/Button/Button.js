import React from "react";

const Button = ({ text, bgColor, padding, onClick, fontSize }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} border-none transition-all flex items-center justify-center rounded-full ${
        padding ? padding : "px-14 py-[13px] "
      } text-white ${fontSize ? fontSize : "text-base"} font-medium `}
    >
      {text}
    </button>
  );
};

export default Button;
