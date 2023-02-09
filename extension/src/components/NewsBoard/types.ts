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

export interface KeywordBarProps {
  keywordList: { kwdId: number; kwdName: string }[];
  subSelect: number;
  setSubSelect: Function;
  setKeywordTitle: Function;
  setKeywordId: Function;
  setKeywordModalOpen: Function;
}

export interface NewsCardProps {
  newsList: News;
}

export interface NewsKeywordBarProps {
  keywordList: string[];
}

export interface NewsKeywordProps {
  content: string;
}

export interface KeywordButtonProps {
  content: string;
  setSubSelect: Function;
  setKeywordTitle: Function;
  setKeywordId: Function;
  subSelect: number;
  index: number;
}

export interface RelatedKeywordBarProps {
  keywordList: any;
  relSelect: number;
  setRelSelect: Function;
}

export interface RelatedKeywordButtonProps {
  content: string;
  setRelSelect: Function;
  relSelect: number;
  index: number;
}
