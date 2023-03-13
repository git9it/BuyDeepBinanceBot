import React,{FunctionComponent} from 'react';
import { Layout } from './Layout';

export const LayoutHOC = <T extends Record<string, unknown>>(Component:FunctionComponent<T>) =>{
 return function (props:T):JSX.Element {
  return (
   <Layout>
    <Component {...props}/>
   </Layout>
  )
 }
}