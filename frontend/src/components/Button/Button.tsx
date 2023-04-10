import React from 'react';
import { ButtonProps } from './Button.props';

function Button(props: ButtonProps) {
  return (
    <div className="self-center flex-shrink-0 h-full p-3">
      <button
        type="submit"
        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
