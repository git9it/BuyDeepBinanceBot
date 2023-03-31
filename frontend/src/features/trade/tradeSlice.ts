import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IcreateTrade {
  pair: string;
  timeFrame: string;
  volumeSold: string;
  amountToBuy: string;
  sellProcent: string;
}
export interface Itrade extends IcreateTrade {
  _id: string;
  status: 'Active' | 'Canceled' | 'Paused' | 'Completed';
}

const url = 'http://localhost:5000/api/v1/trades/';

export const getAllTrades = createAsyncThunk('trade/getAllTrades', async () => {
  console.log('getAllTrades');
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const createTrade = createAsyncThunk(
  'trade/createTrade',
  async (trade: IcreateTrade) => {
    const { pair, timeFrame, volumeSold, amountToBuy, sellProcent } = trade;

    return axios
      .post(url, {
        pair,
        timeFrame,
        volumeSold,
        amountToBuy,
        sellProcent,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);

export const deleteTrade = createAsyncThunk(
  'trade/deleteTrade',
  async (tradeId:string) => {
    return axios
      .delete(url + tradeId)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);

export const tradeSlice = createSlice({
  name: 'trade',
  initialState: {
    allTrades: [],
    isLoading: true,
    newTrade: null,
  },
  reducers: {
    _: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrades.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTrades.fulfilled, (state, action) => {
        console.log(action);

        state.isLoading = false;

        state.allTrades = action.payload;
      })
      .addCase(getAllTrades.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createTrade.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTrade.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newTrade = action.payload.trade;
        state.allTrades = state.allTrades.concat(action.payload.trade);
        console.log(state.allTrades);
      })
      .addCase(createTrade.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTrade.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTrade.fulfilled, (state, action) => {
        state.isLoading = false;

        state.allTrades = state.allTrades.filter(
          (trade: Itrade) => trade._id !== action.payload.data
        );
      })
      .addCase(deleteTrade.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer: tradeReducer, actions: tradeActions } = tradeSlice;
