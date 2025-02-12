import React from "react";
import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ content, textAlign }) => {
  return (
    <p
      className={`text-paragraph ${getTextAlign(textAlign)}`}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};

export default Paragraph;
