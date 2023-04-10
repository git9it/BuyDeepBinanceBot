import Button from '../Button/Button';

interface ItradeItem {
  pair: string;
  sellProcent: string;
  status: string;
  timeFrame: string;
  volumeSold: string;
  _id: string;
  showStatus: string[];
  handleDeleteTrade: (_id: string) => void;
}

function TradeItem({
  pair,
  sellProcent,
  status,
  timeFrame,
  volumeSold,
  _id,
  showStatus,
  handleDeleteTrade,
}: ItradeItem) {
  const shouldRender = showStatus.includes(status);
  if (shouldRender) {
    return (
      <>
        <div className="grid grid-cols-6 gap-4 px-4 py-2 border-b border-gray-200">
          <div className="col-span-1">{pair}</div>
          <div className="col-span-1">{sellProcent}</div>
          <div className="col-span-1">{status}</div>
          <div className="col-span-1">{timeFrame}</div>
          <div className="col-span-1">{volumeSold}</div>

          <div onClick={() => handleDeleteTrade(_id)} className="col-span-1">
            <button>x</button>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default TradeItem;
