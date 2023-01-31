import { useEffect, useState, FC } from "react";
import { KeywordBar } from "../KeywordBar";
import { RelatedKeywordBar } from "../RelatedKeywordBar";
import { NewsContainer } from "./NewsContainer";
import { NewsRefresh } from "./NewsRefresh";
import { KeywordTitle } from "./KeywordTitle";
import { NewsGrid } from './NewsGrid';
import {
  getNews,
  getKeyWordNews,
  getRecommendNews,
  getRecommendKeywords,
} from "@/modules/api";
import { NewsBoardProps, NewsResponse } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "@/modules/store";
export const NewsBoard: FC<NewsBoardProps> = ({ setKeywordModalOpen }) => {
  const [subSelect, setSubSelect] = useState(-1);
  const [relSelect, setRelSelect] = useState(-1);
  const [keywordTitle, setKeywordTitle] = useState("인기 & 추천");
  const [keywordId, setKeywordId] = useState(-1);
  const [pageNum, setPageNum] = useState(0);
  const [relList, setRelList] = useState([{ kwdName: "인기" }]);
  const [recommendList, setRecommendList] = useState([{ kwdName: "인기" }]);
  const [newsObject, setNewsObject] = useState<NewsResponse>({
    page: 0,
    last: false,
    newsList: [],
  });
  const { subScribeKwdList } = useSelector((state: RootState) => {
    return {
      subScribeKwdList: state.persistedReducer.keyWordReducer.subScribeKwdList,
    };
  });
  useEffect(() => {
    getNews(0).then((data) => {
      getRecommendKeywords().then((data: any) => {
        setRelList(data.kwdList);
        setRecommendList(data.kwdList);
      });
      setNewsObject(data);
    });
  }, []);
  useEffect(() => {
    setPageNum(0);
    fetchArticle(0);
  }, [keywordTitle]);
  useEffect(() => {
    setPageNum(0);
    fetchRelArticle(0);
  }, [relSelect]);
  useEffect(() => {
    if (relSelect === -1) {
      fetchArticle(pageNum);
    } else {
      fetchRelArticle(pageNum);
    }
  }, [pageNum]);
  const fetchArticle = (pageNum: number) => {
    if (subSelect === -1) {
      getNews(pageNum).then((data) => {
        if (data.newsList.length === 0) {
          setPageNum(0);
        }
        if (recommendList.length > 1) {
          setRelList(recommendList);
        }
        setNewsObject(data);
        setRelSelect(-1);
      });
    } else {
      getKeyWordNews(subSelect, pageNum).then((data) => {
        if (data.newsList.length === 0) {
          setPageNum(0);
        }
        setNewsObject(data);
        setRelList(data.kwdList);
        setRelSelect(-1);
      });
    }
  };

  const fetchRelArticle = (pageNum: number) => {
    if (relSelect === -1) {
      if (subSelect === -1) {
        getNews(pageNum).then((data) => {
          if (data.newsList.length === 0) {
            setPageNum(0);
          }
          setNewsObject(data);
          setRelSelect(-1);
        });
      } else {
        getKeyWordNews(subSelect, pageNum).then((data) => {
          if (data.newsList.length === 0) {
            setPageNum(0);
          }
          setNewsObject(data);
        });
      }
    } else {
      getRecommendNews(relSelect, pageNum).then((data) => {
        if (data.newsList.length === 0) {
          setPageNum(0);
        }
        setNewsObject(data);
      });
    }
  };
  return (
    <>
      <KeywordBar
        keywordList={subScribeKwdList}
        subSelect={subSelect}
        setSubSelect={setSubSelect}
        setKeywordTitle={setKeywordTitle}
        setKeywordId={setKeywordId}
        setKeywordModalOpen={setKeywordModalOpen}
      />
      <NewsContainer>
        <KeywordTitle title={keywordTitle} />
        <RelatedKeywordBar
          keywordList={relList}
          relSelect={relSelect}
          setRelSelect={setRelSelect}
        />
        <NewsRefresh pageNum={pageNum} setPageNum={setPageNum} />
        <NewsGrid newsObject={newsObject} />
      </NewsContainer>
    </>
  );
};
