import { configureStore } from "@reduxjs/toolkit";
 
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoExchangeApi } from "../services/cryptoExchangeApi";

export default configureStore({
         reducer: {
            [cryptoApi.reducerPath]:cryptoApi.reducer,
            [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
            [cryptoExchangeApi.reducerPath]:cryptoExchangeApi.reducer,
         },
         middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware()
         .concat(cryptoApi.middleware)
         .concat(cryptoNewsApi.middleware)
         .concat(cryptoExchangeApi.middleware),
         
});