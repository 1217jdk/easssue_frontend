import { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { persistor, store, AppDispatch, RootState } from '@/modules/store';
import { getNateTrend } from '@/API/trend';
import { getRecommendKeywords } from '@/API/keyword.api';
import { getSubscribeKeywordsRedux } from '@/modules/keyWordReducer';

const { accessToken, isLogin, subScribeKwdList } = useSelector(
  (state: RootState) => {
    return {
      accessToken: state.persistedReducer.authReducer.token.accessToken,
      isLogin: state.persistedReducer.authReducer.isLogin,
      subScribeKwdList: state.persistedReducer.keyWordReducer.subScribeKwdList,
    };
  }
);

export const getNewTabData = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (accessToken !== '') {
      axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    }
    const getInitialData = async () => {
      if (accessToken !== '') {
        axios.defaults.headers.common['Authorization'] = `${accessToken}`;
      }
      await getNateTrend();
      await getRecommendKeywords();
      await dispatch(getSubscribeKeywordsRedux());
      // return jwtStatus.data;
    };
    getInitialData();
  }, []);
};
