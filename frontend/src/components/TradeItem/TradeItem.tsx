import React from 'react';

function TradeItem({ allTrades }) {
  return (
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

      {allTrades?.map((item) => {
        return (
          <>
            <div className="grid grid-cols-7 gap-4 px-4 py-2 border-b border-gray-200">
              <div className="col-span-1">{item.pair}</div>
              <div className="col-span-1">{item.sellProcent}</div>
              <div className="col-span-1">{item.status}</div>
              <div className="col-span-1">{item.timeFrame}</div>
              <div className="col-span-1">{item.volumeSold}</div>
              <div className="col-span-1">{item._id}</div>
              <div className="col-span-1">delete</div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default TradeItem;
