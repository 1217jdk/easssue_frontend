import { api } from './api.common';
const NEWS_BASE_URL = '/news';

/**
 * * get main news
 * @param {number} pageNumber
 * @method GET
 * @url /news/popular/{pageNumber}
 */

export const getNews = (pageNumber: number) =>
  api('GET', `${NEWS_BASE_URL}/popular/${pageNumber}`);

/**
 * * get news by keyword
 * @param {number} keywordNumber - keyword number
 * @param {number} pageNumber - page number
 * @method GET
 * @url /news/subscribe/{keywordNumber}/page/{pageNumber}
 */

export const getNewsByKeyword = (keywordNumber: number, pageNumber: number) =>
  api('GET', `${NEWS_BASE_URL}/subscribe/${keywordNumber}/page/${pageNumber}`);

/**
 * * get Recommend News by keyword
 * @param {number} keywordNumber - keyword number
 * @param {number} pageNumber - page number
 * @method GET
 * @url /news/recommend/{keywordNumber}/page/{pageNumber}
 */

export const getRecommendNews = (keywordNumber: number, pageNumber: number) =>
  api('GET', `${NEWS_BASE_URL}/recommend/${keywordNumber}/page/${pageNumber}`);

//TODO : add new log api
