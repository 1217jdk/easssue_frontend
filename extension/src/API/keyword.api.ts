import { api } from './api.common';

const KEYWORD_API_URL = '/keyword';
/**
 * * get subscribed keywords
 * @method GET
 * @url /keyword/subscribe
 */
export const getSubscribeKeywords = () =>
  api('GET', KEYWORD_API_URL + '/subscribe');

/**
 * * get ban keywords list
 * @method GET
 * @url /keyword/ban
 */

export const getBanKeywords = () => api('GET', KEYWORD_API_URL + '/ban');

/**
 * * get recommend keywords
 * @method GET
 * @url /keyword/recommend
 */
export const getRecommendKeywords = () =>
  api('GET', KEYWORD_API_URL + '/recommend');

  //todo 