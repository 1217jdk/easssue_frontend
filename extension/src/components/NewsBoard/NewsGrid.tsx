import React from "react";
import { NewsGridProps } from "./types";
import { NewsCard } from '../NewsCard';

export const NewsGrid: React.FC<NewsGridProps> = ({ newsObject }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {newsObject.newsList.map((list, index) => {
        return (
          <div key={index}>
            <NewsCard newsList={list} />
          </div>
        );
      })}
    </div>
  );
};
