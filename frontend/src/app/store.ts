import { configureStore } from '@reduxjs/toolkit';
import { tradeReducer } from '../features/trade/tradeSlice';
import { tradeSellReducer } from '../features/trade/sellTradeSlice';

export const store = configureStore({
  reducer: {
    trade: tradeReducer,
    sellTrade: tradeSellReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;