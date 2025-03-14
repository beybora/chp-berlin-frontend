import React from "react";

const Column = ({ children, width }) => {
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div style={widthStyle}>
      {children}
    </div>
  );
};

export default Column;
