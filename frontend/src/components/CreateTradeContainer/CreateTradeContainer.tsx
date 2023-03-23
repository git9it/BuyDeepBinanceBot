import React from 'react';
import { useState } from 'react';
import Buy from '../Buy/Buy';
import Sell from '../Sell/Sell';
import Dropdown from '../Dropdown/Dropdown';
// @ts-ignore
import SYMBOLS from '../../utils/constants/symbols.constants.js';
import Button from '../Button/Button';

const initialState = {
  pair: '',
  timeFrame: '',
  volumeSold: '',
  amountToBuy: '',
  sellProcent: '',
};

function CreateTradeContainer() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEventHandler<HTMLSelectElement>): void => {
    // @ts-ignore
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log(values);
    e.preventDefault();
  };

  const updatePairValue = (value: any) => {
    setValues({ ...values, pair: value });
  };

  return (
    <div className="flex flex-col items-center h-full bg-gray-400">
      <form className="form" onSubmit={onSubmit}>
        <h1>Pair</h1>
        <Dropdown updatePairValue={updatePairValue} options={SYMBOLS} />
        <h1>Buy if</h1>
        <Buy handleChange={handleChange} values={values} />
        <h1>Sell if</h1>
        <Sell handleChange={handleChange} values={values} />

        <Button type="submit" />
      </form>
    </div>
  );
}

export default CreateTradeContainer;
