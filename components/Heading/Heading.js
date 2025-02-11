import React from "react";
import { getFontSize, getTextAlign } from "utils/fonts";

const Heading = ({ content, level = 2, textAlign }) => {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`max-w-5xl mx-auto mb-1000 ${getFontSize(level)} ${getTextAlign(textAlign)}`}
      dangerouslySetInnerHTML={{ __html: content }} // HTML sicher rendern
    />
  );
};

export default Heading;
