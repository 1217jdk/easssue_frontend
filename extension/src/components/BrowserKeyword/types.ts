type keyword = {
  keyword_dtm: string;
  keyword_sq: number;
  keyword_name: string;
  keyword_service: string;
  create_dtm: string;
  mod_dtm: string;
  ctgr_cd: string;
  count: number;
  score: number;
};

export interface KeywordResponse {
  [k: number]: keyword;
}

export interface KeywordSliderProps {
  trend: string[];
  host: string;
  isGoogle: Boolean;
}

export interface KeywordBoxProps {
  trend: string[];
  host: string;
  isGoogle: Boolean;
  isHovering: number;
  setIsHovering: Function;
}

export interface KeywordContainerProps {
  children: React.ReactNode;
  isGoogle: Boolean;
  setIsHovering: Function;
}

export interface BrowserKeywordProps {
  trend: string[];
  host: string;
}
