import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '15fee4c1edmsh4b6cabb26709a96p19c7d4jsn46e0a8623f61'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url,headers:apiNewsHeaders})

export const cryptoNewsApi = createApi({
  reducerPath:'cryptoNewsApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder) => ({
      getCryptoNews:builder.query({
          query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      })
  })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;