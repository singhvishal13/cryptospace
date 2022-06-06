//
import { configureStore } from '@reduxjs/toolkit';
import { cryptoExchangeApi } from '../Services/cryptoExchangeApi'
import { cryptoApi } from '../Services/cryptoApi';
import { cryptoNewsApi } from '../Services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoExchangeApi.reducerPath]:cryptoExchangeApi.reducer,
  },
});