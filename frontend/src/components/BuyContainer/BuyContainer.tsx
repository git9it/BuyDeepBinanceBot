import React from 'react'
import  Button  from '../Button/Button';
import Input from '../Input/Input';

function BuyContainer() {
  return (
    <>
      <section className='flex flex-col p-2 bg-amber-500'>
        <h1>Buy if</h1>
        <div>
          <Input />
          <Button>Add</Button>
        </div>
      </section>
    </>
  );
}

export default BuyContainer