import React from 'react';
import { LayoutProps } from './Layout.props';
import Header from './Header/Header';
import Logger from './Logger/Logger';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Logger />
    </>
  );
};
