import React from 'react';
import { useEffect } from 'react';
import { getAllTrades, deleteTrade } from '../../features/trade/tradeSlice';
import { useDispatch, useSelector } from 'react-redux';
import TradeItem from '../TradeItem/TradeItem';
import { Itrade } from '../../features/trade/tradeSlice';
import { AppDispatch, RootState } from '../../app/store';

function OpenTradesContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { allTrades } = useSelector((store: RootState) => store.trade);

  useEffect(() => {
    dispatch(getAllTrades());
  }, [dispatch]);

  const handleDeleteTrade = (tradeId: string) => {
    dispatch(deleteTrade(tradeId));
  };

  if (allTrades.length === 0) {
    return <h2>No trades to display...</h2>;
  }

  return (
    <>
      <section className="flex flex-col p-2 bg-green-800">
        <h1>Open Trades</h1>
        <div className="mx-auto overflow-hidden bg-gray-100 rounded-lg max-">
          <div className="grid grid-cols-7 gap-4 px-4 py-2 font-medium text-gray-600 uppercase border-b border-gray-200 shrink-0">
            <div className="col-span-1">pair</div>
            <div className="col-span-1">sellPercent</div>
            <div className="col-span-1">status</div>
            <div className="col-span-1">timeFrame</div>
            <div className="col-span-1">volumeSold</div>
            <div className="col-span-1">_id</div>
            <div className="col-span-1">delete</div>
          </div>
          {allTrades.map((trade: Itrade) => {
            return (
              <TradeItem
                handleDeleteTrade={handleDeleteTrade}
                key={trade._id}
                showStatus={['Active']}
                {...trade}
              />
            );
          })}
        </div>
        <div></div>
        <div></div>
      </section>
    </>
  );
}

export default OpenTradesContainer;
