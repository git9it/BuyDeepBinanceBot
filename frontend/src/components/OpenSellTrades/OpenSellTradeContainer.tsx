import React from 'react';
import { useEffect } from 'react';
import { getAllSellTrades } from '../../features/trade/sellTradeSlice';
import { useDispatch, useSelector } from 'react-redux';
import TradeSellItem from '../SellTradeItem/SellTradeItem';
import { IsellTrade } from '../../features/trade/sellTradeSlice';
import { AppDispatch, RootState } from '../../app/store';
import {deleteSellTrade} from '../../features/trade/sellTradeSlice';

function OpenSellTradesContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { allSellTrades } = useSelector((store: RootState) => store.sellTrade);

  useEffect(() => {
    dispatch(getAllSellTrades());
  }, [dispatch]);

  const handleDeleteTrade = (tradeId: string) => {
    console.log('deleteTrade', tradeId);
     dispatch(deleteSellTrade(tradeId));
  };

  if (allSellTrades.length === 0) {
    return <h2>No trades to display...</h2>;
  }

  return (
    <>
      <section className="flex flex-col p-2 bg-blue-800">
        <h1>Open Trades</h1>
        <div className="mx-auto overflow-hidden bg-gray-100 rounded-lg max-">
          <div className="grid grid-cols-7 gap-4 px-4 py-2 font-medium text-gray-600 uppercase border-b border-gray-200 shrink-0">
            <div className="col-span-1">pair</div>
            <div className="col-span-1">buyPrice</div>
            <div className="col-span-1">sellPrice</div>
            <div className="col-span-1">amountToSell</div>
            <div className="col-span-1">status</div>
            <div className="col-span-1">binanceTradeID</div>
            <div className="col-span-1">_id</div>
            <div className="col-span-1">delete</div>
          </div>
          {allSellTrades.map((trade: IsellTrade) => {
            return (
              <TradeSellItem
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

export default OpenSellTradesContainer;
