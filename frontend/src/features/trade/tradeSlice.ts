import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const url = 'http://localhost:5000/api/v1/trades/';

export const getAllTrades = createAsyncThunk('trade/getAllTrades', async () => {
  console.log('getAllTrades');
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const tradeSlice = createSlice({
  name: 'trade',
  initialState: {
    allTrades:[],
    isLoading: true
  },
  reducers: {
    _: (state) => {},
  },
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = getAllTrades;

    builder
      .addCase(pending, (state) => {
        //@ts-ignore
        state.isLoading = true;
      })
      .addCase(fulfilled, (state, action) => {
        console.log(action);
        //@ts-ignore
        state.isLoading = false;
        //@ts-ignore
        state.allTrades = action.payload;
      })
      .addCase(rejected, (state) => {
        //@ts-ignore
        state.isLoading = false;
      });
  },
});

export const { reducer: tradeReducer, actions: tradeActions } = tradeSlice;
