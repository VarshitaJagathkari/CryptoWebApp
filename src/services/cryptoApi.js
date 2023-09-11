import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
  'X-API-Key': 'coinranking8d7a26e2a662381f71ec1db2b9da20835ab5716fc787addd',
}

const baseUrl='https://api.coinranking.com/v2';
const createRequest = (url)=>({url, headers:cryptoApiHeaders})
export const cryptoApi=createApi({
      reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints: (builder) => ({
         getCryptos: builder.query({
            query: (count) =>createRequest(`/coins?limit=${count}`),

         }),
         getCryptoDetails: builder.query({
            query: (coinId)=> createRequest(`/coin/${coinId}`),
         }),
         getCryptoHistory: builder.query({
            query: ({coinId,timePeriod})=> createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
           
         })
      })
})

export const{useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery}=cryptoApi;