import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
 import SYMBOLS from '../../utils/constants/symbols.constants.js';

function OpenTradesContainer() {
  return (
    <>
      <section className="flex flex-col p-2 bg-green-800">
        <h1>Open Trades</h1>
        <div>open trades here</div>
        <div>
          <Dropdown options={SYMBOLS} />
        </div>
        <div></div>
      </section>
    </>
  );
}

export default OpenTradesContainer;
