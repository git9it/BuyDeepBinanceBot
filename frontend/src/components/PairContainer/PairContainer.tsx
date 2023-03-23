import React from 'react'
import Dropdown from '../Dropdown/Dropdown';
// @ts-ignore
import SYMBOLS from '../../utils/constants/symbols.constants.js';

function PairContainer() {
  return (
    <>
      <section className="flex flex-col p-2 bg-amber-500">
        <h1>Pair</h1>
        <div>
          <Dropdown options={SYMBOLS} />
        </div>
      </section>
    </>
  );
}

export default PairContainer