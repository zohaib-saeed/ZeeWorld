import React from "react";

const Container = ({ styles, maxWidth, children }) => {
  return (
    <div
      className={`w-full ${
        maxWidth ? maxWidth : "max-w-[1280px]"
      }  flex flex-col items-center justify-start px-4   ${styles}`}
    >
      {children}
    </div>
  );
};

export default Container;
