type News = {
  newsId: number;
  title: string;
  link: string;
  pubDate: string;
  summary: string[];
  keywords: string[];
  img: string;
};

export interface NewsResponse {
  page: number;
  last: boolean;
  newsList: News[];
}

export interface NewsBoardProps {
  setKeywordModalOpen: Function;
}

export interface NewsContainerProps {
  children: React.ReactNode;
}

export interface KeywordTitleProps {
  title: string;
}

export interface NewsRefreshProps {
  pageNum: number;
  setPageNum: Function;
}

export interface NewsGridProps {
  newsObject: NewsResponse;
}