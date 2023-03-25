import React from 'react';
import { getAllTrades } from '../../features/trade/tradeSlice';
import { useDispatch, useSelector } from 'react-redux';


function HistoryContainer() {
  const dispatch = useDispatch();
  const { allTrades, isLoading } = useSelector((store) => store.trade);

  const clickHandler = () => {
    dispatch(getAllTrades());
  };

  return (
    <>
      <section className="flex flex-col p-2 bg-purple-500">
        <h1>History</h1>
        <div>
          <button
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={clickHandler}
          >
            getalltrades
          </button>
          <button
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={() => console.log('allTrades: ' + allTrades[0]._id)}
          >
            console
          </button>
          history here
        </div>
      </section>
    </>
  );
}

export default HistoryContainer;
