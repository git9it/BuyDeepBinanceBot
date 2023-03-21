import React from 'react';
import { ButtonProps } from './Button.props';

function Button({ children }: ButtonProps) {
  return <button className="px-2 py-1 text-white bg-green-700 border-solid">{children}</button>;
}

export default Button;
