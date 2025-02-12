export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        "left": "text-left",
        "center": "text-center",
        "right": "text-right",
    }

    return `${textAlignMap[textAlign] || "text-left"}`;
};
     
export const getFontSize = (level) => {
    const fontSizeMap = {
        1: "text-h1",
        2: "text-h2",
        3: "text-h3",
        4: "text-h4",
        5: "text-h5",
        6: "text-h6",
    }

    return `${fontSizeMap[level] || "text-base"}` ;
}