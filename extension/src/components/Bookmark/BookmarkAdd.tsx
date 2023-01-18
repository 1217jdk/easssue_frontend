import React, { useEffect, useState } from "react";
import { BookmarkProps } from "./types";
export const BookmarkAdd: React.FC<BookmarkProps> = ({
  setBookmarkModalOpen,
  bookmarkTree,
}) => {
  const onCreateClick = () => {
    setBookmarkModalOpen(true);
  };
  return (
    <button onClick={onCreateClick}>
      <img
        className="m-auto"
        style={{ width: 32, height: 32 }}
        src="bookmark.svg"
      />
      <div className="mt-2 text-xs text-ellipsis line-clamp-2 text-white">
        북마크 추가
      </div>
    </button>
  );
};
