export interface BookmarkProps {
  setBookmarkModalOpen: Function;
  bookmarkTree: chrome.bookmarks.BookmarkTreeNode[];
}

export type ContainerProps = {
  children: React.ReactNode;
};