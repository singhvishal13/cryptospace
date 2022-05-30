import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  // 'X-BingApis-SDK': 'true',
  // 'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  // 'X-RapidAPI-Key': '8ab12e0260mshd3f448e2c4c7072p1429d3jsn6aa450dc2018'
  'X-RapidAPI-Key': '0c176c27bdmsh24cd4d9b2ae3c05p11c4e0jsn57b3206836d4'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      /* query: ({newsCategory, count}) => createRequest(`/news`), */
      query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;