import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
 
const baseUrl='https://api.coingecko.com/api/v3/exchanges';

export const cryptoExchangeApi=createApi({
    reducerPath: 'cryptoExchangeApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
       getCryptosExchange: builder.query({
          query: () =>baseUrl,
       })
    })
})

export const {useGetCryptosExchangeQuery}=cryptoExchangeApi;
  


