import React from 'react';
import { useEffect } from 'react';
import { getAllTrades, deleteTrade } from '../../features/trade/tradeSlice';
import { useDispatch, useSelector } from 'react-redux';
import TradeItem from '../TradeItem/TradeItem';
import { Itrade } from '../../features/trade/tradeSlice';
import { AppDispatch, RootState } from '../../app/store';
import { Htag } from '../Htag/Htag';

const showArray = ['Active', 'Paused'];

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
    return <Htag tag="h2">No trades to display...</Htag>;
  }

  return (
    <>
      <section className="flex flex-col items-center p-2">
        <Htag tag="h1">Open Buy Trades</Htag>
        <div className="pt-4">
          <div className="mx-auto overflow-hidden bg-gray-100 rounded-lg max-">
            <div className="grid grid-cols-6 gap-4 px-4 py-2 font-medium text-center text-gray-600 uppercase border-b border-gray-200  shrink-0">
              <div className="col-span-1">pair</div>
              <div className="col-span-1">sellPercent</div>
              <div className="col-span-1">status</div>
              <div className="col-span-1">timeFrame</div>
              <div className="col-span-1">volumeSold</div>
              <div className="col-span-1">delete</div>
            </div>
            {allTrades.map((trade: Itrade) => {
              return (
                <TradeItem
                  handleDeleteTrade={handleDeleteTrade}
                  key={trade._id}
                  showStatus={showArray}
                  {...trade}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default OpenTradesContainer;
