import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

function SellContainer() {
  return (
    <>
      <section className="flex flex-col p-2 bg-blue-600">
        <h1>Sell if</h1>
        <div>
          <Input />
          <Button>Add</Button>
        </div>
      </section>
    </>
  );
}

export default SellContainer;
