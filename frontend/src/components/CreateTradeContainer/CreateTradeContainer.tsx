import React from 'react';
import { useState } from 'react';
import Buy from '../Buy/Buy';
import Sell from '../Sell/Sell';
import PairSelector from '../PairSelector/PairSelector';
// @ts-ignore
import SYMBOLS from '../../utils/constants/symbols.constants.js';
import Button from '../Button/Button';
import { createTrade } from '../../features/trade/tradeSlice';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  pair: '',
  timeFrame: '1',
  volumeSold: '',
  amountToBuy: '',
  sellProcent: '',
};

function CreateTradeContainer() {
  const dispatch = useDispatch();
  const { newTrade, isLoading } = useSelector((store) => store.trade);
  const [values, setValues] = useState(initialState);

  const handleChange = (
    e: React.ChangeEventHandler<HTMLSelectElement>
  ): void => {
    // @ts-ignore
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(createTrade(values));
  };

  const updatePairValue = (value: any) => {
    setValues({ ...values, pair: value });
  };

  return (
    <div className="flex flex-col items-center h-full bg-gray-400">
      <div className="m-4 mx-auto overflow-hidden bg-gray-100 rounded-lg">
        <form className="form" onSubmit={onSubmit}>
          <h1>Pair</h1>
          <PairSelector updatePairValue={updatePairValue} options={SYMBOLS} />
          <h1>Buy if</h1>
          <Buy handleChange={handleChange} values={values} />
          <h1>Sell if</h1>
          <Sell handleChange={handleChange} values={values} />

          <Button type="submit" />
        </form>
      </div>
    </div>
  );
}

export default CreateTradeContainer;
