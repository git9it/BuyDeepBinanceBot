import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface IsellTrade {
  pair: string;
  buyPrice: string;
  sellPrice: string;
  amountToSell: string;
  binanceTradeID: string;
  buyTrade: string;
  _id: string;
  status: 'Active' | 'Canceled' | 'Paused' | 'Completed';
}

const url = 'http://localhost:5000/api/v1/selltrades/';

export const getAllSellTrades = createAsyncThunk('trade/getAllSellTrades', async () => {
  console.log('getAllSellTrades');
  return axios.get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const tradeSellSlice = createSlice({
  name: 'trade',
  initialState: {
    allSellTrades: [],
    isLoading: true,
    newTrade: null,
  },
  reducers: {
    _: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSellTrades.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSellTrades.fulfilled, (state, action) => {
        console.log(action);

        state.isLoading = false;

        state.allSellTrades = action.payload;
      })
      .addCase(getAllSellTrades.rejected, (state) => {
        state.isLoading = false;
      });
      
  },
});

export const { reducer: tradeSellReducer, actions: tradeSellActions } = tradeSellSlice;