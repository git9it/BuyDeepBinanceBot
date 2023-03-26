import React from 'react';

function TradeItem({
  pair,
  sellProcent,
  status,
  timeFrame,
  volumeSold,
  _id,
  handleDeleteTrade,
}) {
  return (
    <>
      <div className="grid grid-cols-7 gap-4 px-4 py-2 border-b border-gray-200">
        <div className="col-span-1">{pair}</div>
        <div className="col-span-1">{sellProcent}</div>
        <div className="col-span-1">{status}</div>
        <div className="col-span-1">{timeFrame}</div>
        <div className="col-span-1">{volumeSold}</div>
        <div className="col-span-1">{_id}</div>
        <div onClick={() => handleDeleteTrade(_id)} className="col-span-1">
          delete
        </div>
      </div>
    </>
  );
}

export default TradeItem;
