import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { AppWithLayout } from './app/App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithLayout />
    </Provider>
  </React.StrictMode>
);
