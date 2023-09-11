import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

{/*const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '76013ad191msh96e888452914244p1c65c0jsn038ddf607035',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}*/}

const baseUrl='https://newsapi.org/v2';
const createRequest = (url)=>({url});
export const cryptoNewsApi=createApi({
      reducerPath: 'cryptoNewsApi',
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints: (builder) => ({
         getCryptoNews: builder.query({
            query: ({newsCategory}) =>createRequest(`/everything?q=${newsCategory}&apiKey=df9a4a70ba474174ac19ec20a5854105`) ,
         })
      })
})

export const{useGetCryptoNewsQuery}=cryptoNewsApi;