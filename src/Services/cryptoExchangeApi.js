import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const axios = require("axios");


const cryptoExchangeHeaders = {
    'X-RapidAPI-Host': 'crypto-coin-xchange.p.rapidapi.com',
    'X-RapidAPI-Key': 'enter the key here'
};

const baseUrl = 'https://crypto-coin-xchange.p.rapidapi.com/api/price';

const createRequest = (url) => ({ url, headers: cryptoExchangeHeaders });


export const cryptoExchangeApi = createApi({
  reducerPath: 'cryptoExchangeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
        query: () => createRequest('/'),
    }),
  })
});

export const { useGetCryptoExchangeQuery } = cryptoExchangeApi;