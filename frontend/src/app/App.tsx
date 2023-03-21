import React from 'react';

import { LayoutHOC } from '../layout/LayoutHOC';
import BuyContainer from '../components/BuyContainer/BuyContainer';
import SellContainer from '../components/SellContainer/SellContainer';
import HistoryContainer from '../components/HistoryContainer/HistoryContainer';
import OpenTradesContainer from '../components/OpenTradesContainer/OpenTradesContainer';

function App() {
  return (
    <div className="App">
      <BuyContainer />
      <SellContainer />
      <HistoryContainer /> 
      <OpenTradesContainer/>
    </div>
  );
}

export const AppWithLayout = LayoutHOC(App);
