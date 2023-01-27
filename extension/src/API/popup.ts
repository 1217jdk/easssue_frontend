import { api } from './api.common';
const POPUP_API_URL = '/popup';

/**
 * * get word cloud img and 3line summery at current page
 * @param url : string
 * @method POST
 * @url /popup
 */

export const popupApi = (url: string) =>
  api<string>('POST', POPUP_API_URL, url);
