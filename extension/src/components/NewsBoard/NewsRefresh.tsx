import React from "react";
import { NewsRefreshProps } from './types';

export const NewsRefresh: React.FC<NewsRefreshProps> = ({pageNum, setPageNum}) => {
  const onPageClick = () => {
    setPageNum((pageNum + 1) % 10);
  };
  return (
    <button className="mx-2 absolute top-4 right-2" onClick={onPageClick}>
      <img className="m-auto w-[28px] h-[28px]" src="refresh.svg" />
    </button>
  );
};
