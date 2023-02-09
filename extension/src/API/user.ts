import { api } from './api.common';
import type { UserAuthInput } from './types';
const USER_API_URL = '/user';

/**
 * * login
 * @param {string} email
 * @param {string} pwd
 * @method POST
 * @url /user/login
 */
export const userLogin = (email: string, pwd: string) =>
  api<UserAuthInput>('POST', USER_API_URL + '/login', {
    email,
    pwd,
  });

/**
 * * signup with email, password
 * @param {string} email - user email
 * @param {string} pwd - password
 * @method POST
 * @url /user/signup
 */

export const userSignUp = (email: string, pwd: string) =>
  api<UserAuthInput>('POST', USER_API_URL + '/signup', {
    email,
    pwd,
  })

/**
 * * email duplication check at signup
 * @param {string} email as const
 * @method GET
 * @url /user/check/{email}
 */

export const checkDuplicateEmail = (email: string) =>
  api('GET', USER_API_URL + '/check/' + email);


  //TODO add user jwt token api check,,, 1. axios interceptors?