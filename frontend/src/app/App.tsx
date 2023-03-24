import React from 'react';

import { LayoutHOC } from '../layout/LayoutHOC';
import HistoryContainer from '../components/HistoryContainer/HistoryContainer';
import OpenTradesContainer from '../components/OpenTradesContainer/OpenTradesContainer';
import CreateTradeContainer from '../components/CreateTradeContainer/CreateTradeContainer';

function App() {
  return (
    <div className="App">
      <CreateTradeContainer />
      <HistoryContainer />
      <OpenTradesContainer />
    </div>
  );
}

export const AppWithLayout = LayoutHOC(App);
