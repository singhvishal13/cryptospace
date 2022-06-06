import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://crypto-coin-xchange.p.rapidapi.com/api/price',
//   headers: {
//     'X-RapidAPI-Host': 'crypto-coin-xchange.p.rapidapi.com',
//     'X-RapidAPI-Key': '0c176c27bdmsh24cd4d9b2ae3c05p11c4e0jsn57b3206836d4'
//   }
// };
const cryptoExchangeHeaders = {
    'X-RapidAPI-Host': 'crypto-coin-xchange.p.rapidapi.com',
    'X-RapidAPI-Key': '0c176c27bdmsh24cd4d9b2ae3c05p11c4e0jsn57b3206836d4'
};

const baseUrl = 'https://crypto-coin-xchange.p.rapidapi.com/api/price';

const createRequest = (url) => ({ url, headers: cryptoExchangeHeaders });

// export const cryptoExchangeApi = axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

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