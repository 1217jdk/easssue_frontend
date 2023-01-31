import React, { useState } from "react";
import { BrowserKeywordProps} from "./types";
import { KeywordSlider } from "./KeywordSlider";
import { KeywordBox } from "./KeywordBox";
import { KeywordContainer } from "./KeywordContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BrowserKeyword: React.FC<BrowserKeywordProps> = ({
  trend,
  host,
}) => {
  const [isHovering, setIsHovering] = useState(0);
  const [isGoogle, setIsGoogle] = useState(host === "www.google.com");
  
  return (
    <KeywordContainer isGoogle={isGoogle} setIsHovering={setIsHovering}>
      <KeywordSlider trend={trend} host={host} isGoogle={isGoogle} />
      <KeywordBox
        trend={trend}
        host={host}
        isGoogle={isGoogle}
        isHovering={isHovering}
        setIsHovering={setIsHovering}
      />
    </KeywordContainer>
  );
};
