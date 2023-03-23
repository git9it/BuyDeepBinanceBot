import React, { useState } from 'react';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  values: {
    timeFrame: string;
    volumeSold: string;
    amountToBuy: string;
  };
}

const Buy: React.FC<Props> = ({ handleChange, values }) => {
  

  return (
    <div className="flex flex-row items-center">
      <label
        htmlFor="timeframe"
        className="block mr-2 text-sm font-light text-gray-700"
      >
        Timeframe
      </label>
      <div className="relative flex-shrink">
        <select
          id="timeframe"
          name="timeFrame"
          className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={values.timeFrame}
          onChange={handleChange}
        >
          <option value="1">1 m</option>
          <option value="3">3 m</option>
          <option value="5">5 m</option>
        </select>
      </div>
      <div className="flex-shrink pl-2">
        <label htmlFor="volume" className="sr-only">
          Volume Sold
        </label>
        <input
          type="number"
          id="volume"
          name="volumeSold"
          className="block w-full px-3 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Volume Sold"
          value={values.volumeSold}
          onChange={handleChange}
        />
      </div>
      <div className="flex-shrink pl-2">
        <label htmlFor="amount" className="sr-only">
          Amount to Buy
        </label>
        <input
          type="number"
          id="amount"
          name="amountToBuy"
          className="block w-full px-3 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Amount to Buy"
          value={values.amountToBuy}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Buy;
