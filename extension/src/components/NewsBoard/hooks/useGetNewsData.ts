import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getNews, getNewsByKeyword, getRecommendNews } from '@/API/news';
import { AxiosError } from 'axios';

export const useGetNews = (pageNumber: number) => {
  return useQuery(['get-news', pageNumber], () => getNews(pageNumber));
};

export const useGetNewsByKeyword = (keyword: string) => {
  return useQuery(['get-news-by-keyword', keyword], () => getNewsByKeyword);
};

export const useGetRecommendedNews = () => {
  return useQuery(['get-recommend-news'], () => getRecommendNews);
};
