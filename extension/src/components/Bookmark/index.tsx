import { FC } from "react";
import { BookmarkProps } from "./types";
import { BookmarkAdd } from "./BookmarkAdd";
import { Bookmarks } from "./Bookmarks";
import { BookmarkContainer } from "./BookmarkContainer";

export const Bookmark: FC<BookmarkProps> = ({
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
