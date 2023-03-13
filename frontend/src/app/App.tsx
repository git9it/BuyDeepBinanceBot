import React from 'react';

import { LayoutHOC } from '../layout/LayoutHOC';

function App() {
  return (
    <div className="App">
      <input
        type="text"
        style={{
          width: '150px',
          marginRight: '10px',
          padding: '5px',
          borderRadius: '5px',
          border: 'none',
        }}
      />
      <button
        style={{
          background: 'linear-gradient(to right, #00C9FF, #92FE9D)',
          padding: '7px 15px',
          color: '#fff',
          borderRadius: '5px',
          border: 'none',
        }}
      >
        Add
      </button>
    </div>
  );
}

export const AppWithLayout = LayoutHOC(App);
