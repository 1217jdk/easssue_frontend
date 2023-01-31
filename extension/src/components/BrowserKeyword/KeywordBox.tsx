import React from "react";
import { KeywordBoxProps } from "./types";

export const KeywordBox: React.FC<KeywordBoxProps> = ({
  trend,
  host,
  isGoogle,
  isHovering,
  setIsHovering,
}) => {
  return (
    <div
      className="keyword-box"
      style={{ display: !isHovering ? "none" : "block" }}
      onMouseOut={() => setIsHovering(0)}
    >
      <div className="keyword-title">실시간 키워드</div>
      {trend.map((value, index) => {
        return (
          <div key={index}>
            <div className="box-text">
              <span className="font-bold"> {index + 1} </span>{" "}
              <a
                href={
                  isGoogle
                    ? `https://${host}/search?q=${value}`
                    : `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${value}`
                }
                style={{ textDecoration: "none" }}
              >
                {" "}
                &nbsp; {value}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
