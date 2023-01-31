import axios, { AxiosError } from 'axios';
export const BASE_URL = 'https://www.easssue.com/api';

export const api = async <BodyType,>( method : string, url : string, body?: BodyType ) => {
  try {
    const { data } = await axios({
      method,
      url: BASE_URL + url,
      data: body,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      alert(error.response?.data);
      return error;
    }
    return error;
  }
};
