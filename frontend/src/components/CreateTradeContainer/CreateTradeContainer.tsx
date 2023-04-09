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
import { AppDispatch, RootState } from '../../app/store';
import { Htag } from '../Htag/Htag';

const initialState = {
  pair: '',
  timeFrame: '1',
  volumeSold: '',
  amountToBuy: '',
  sellProcent: '',
};

function CreateTradeContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { newTrade, isLoading } = useSelector(
    (store: RootState) => store.trade
  );
  const [values, setValues] = useState(initialState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ): void => {
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
    <div className="flex flex-col items-center">
      <div className="m-4 mx-auto overflow-hidden bg-gray-300 rounded-lg shadow-md">
        <form className="form" onSubmit={onSubmit}>
          <PairSelector updatePairValue={updatePairValue} options={SYMBOLS} />
          <Htag tag="h3">Buy if</Htag>
          <Buy handleChange={handleChange} values={values} />
          <Htag tag="h3">Sell if</Htag>
          <Sell handleChange={handleChange} values={values} />

          <Button type="submit" />
        </form>
      </div>
    </div>
  );
}

export default CreateTradeContainer;
