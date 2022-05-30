
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      // 'X-RapidAPI-Key': '8ab12e0260mshd3f448e2c4c7072p1429d3jsn6aa450dc2018'
      'X-RapidAPI-Key': '0c176c27bdmsh24cd4d9b2ae3c05p11c4e0jsn57b3206836d4'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: () => createRequest('/coins'),
      }),
      
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getExchanges: builder.query({
        query: () => createRequest('/exchange/-zdvbieRdZ/coins'),
      }),
      // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),
    })
  });
  
  export const {useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;

