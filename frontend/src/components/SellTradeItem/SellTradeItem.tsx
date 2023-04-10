import React from 'react';

interface IsellTradeItem {
  pair: string;
  buyPrice: string;
  sellPrice: string;
  amountToSell: string;
  binanceTradeID: string;
  status: string;
  buyTrade: string;
  _id: string;
  showStatus: string[];
  handleDeleteTrade: (_id: string) => void;
}

function SellTradeItem({
  pair,
  buyPrice,
  sellPrice,
  amountToSell,
  binanceTradeID,
  _id,
  showStatus,
  status,
  handleDeleteTrade,
}: IsellTradeItem) {
  const shouldRender = showStatus.includes(status);
  if (shouldRender) {
    return (
      <>
        <div className="grid grid-cols-6 gap-4 px-4 py-2 text-center border-b border-gray-200">
          <div className="col-span-1">{pair}</div>
          <div className="col-span-1">{buyPrice}</div>
          <div className="col-span-1">{sellPrice}</div>
          <div className="col-span-1">{amountToSell}</div>
          <div className="col-span-1">{status}</div>
          <div onClick={() => handleDeleteTrade(_id)} className="col-span-1">
            x
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default SellTradeItem;
