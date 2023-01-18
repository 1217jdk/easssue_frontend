import React, { useEffect, useState } from "react";
import { BookmarkModal } from "../BookmarkModal";
import { BookmarkProps } from "./types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BookmarkAdd } from "./BookmarkAdd";
import { Bookmarks } from "./Bookmarks";
import { BookmarkContainer } from "./BookmarkContainer";

export const Bookmark: React.FC<BookmarkProps> = ({
  setBookmarkModalOpen,
  bookmarkTree,
}) => {
  return (
    <>
      <BookmarkContainer>
        <Bookmarks
          setBookmarkModalOpen={setBookmarkModalOpen}
          bookmarkTree={bookmarkTree}
        />
        <BookmarkAdd
          setBookmarkModalOpen={setBookmarkModalOpen}
          bookmarkTree={bookmarkTree}
        />
      </BookmarkContainer>
    </>
  );
};
