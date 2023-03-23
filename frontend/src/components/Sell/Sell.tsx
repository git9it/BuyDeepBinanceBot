import React from 'react';
interface Props {
  handleChange: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
  values: {
    sellProcent: string;
  };
}

const Sell: React.FC<Props> = ({ handleChange, values }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex-shrink pl-2">
        <label htmlFor="percentUp" className="sr-only">
          % up from buy price
        </label>
        <input
          type="number"
          id="percentUp"
          name="sellProcent"
          className="block w-full px-3 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="% up from buy price"
          value={values?.sellProcent}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Sell;
