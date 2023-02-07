import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getNews, getNewsByKeyword, getRecommendNews } from '@/API/news';
import { AxiosError } from 'axios';

export const useGetNews = (pageNumber : number) => {
  
};

export const useGetNewsByKeyword = (keyword: string) =>{

}

export const useGetRecommendedNews = ()=>{

}