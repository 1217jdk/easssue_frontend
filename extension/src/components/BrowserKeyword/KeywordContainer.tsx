import React from "react";
import { KeywordContainerProps } from "./types";

export const KeywordContainer: React.FC<KeywordContainerProps> = ({
  children,
  isGoogle,
  setIsHovering,
}) => {
  const header =
    document.querySelector("#header") ||
    document.querySelector("#lnb") ||
    document.querySelector("body")!;
  const naverBg = window.getComputedStyle(header).backgroundColor;
  const bg = window.getComputedStyle(document.body).backgroundColor;
  return (
    <div
      style={{
        height: "100%",
        minWidth: 270,
        maxWidth: 270,
        display: "block",
        alignItems: "center",
        backgroundColor: isGoogle ? bg : naverBg,
      }}
      onMouseOver={() => setIsHovering(1)}
      onMouseOut={() => setIsHovering(0)}
    >
      {children}
    </div>
  );
};
