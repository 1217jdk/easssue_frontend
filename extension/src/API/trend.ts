import { api } from './api.common';

/**
 * * GET nateTrend
 * @param none
 * @method GET
 * @url /dash/news/{date}
 */

export const getNateTrend = () => api('GET', 'trend/v2');
