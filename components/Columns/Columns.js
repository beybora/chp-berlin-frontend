import React from "react";

const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
}) => {
  return (
    <div className={`py-10 text-${textColor} bg-[${backgroundColor}]`}>
      <div
        className={`max-w-5xl mx-auto gap-5 container ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Columns;
