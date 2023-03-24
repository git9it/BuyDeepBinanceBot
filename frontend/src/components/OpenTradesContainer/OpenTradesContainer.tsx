import React from 'react';
import { useEffect } from 'react';
import { getAllTrades } from '../../features/trade/tradeSlice';
import { useDispatch, useSelector } from 'react-redux';

function OpenTradesContainer() {
    const dispatch = useDispatch();
    const { allTrades, isLoading } = useSelector((store) => store.trade);
    
    useEffect(() => {
        dispatch(getAllTrades());
    }, [dispatch]);
  return (
    <>
      <section className="flex flex-col p-2 bg-green-800">
        <h1>Open Trades</h1>
        <div>open trades here</div>
        
        <div>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default OpenTradesContainer;
