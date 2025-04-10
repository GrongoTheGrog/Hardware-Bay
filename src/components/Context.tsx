import React, { ReactNode } from 'react';
import { CartContextElement } from '../hooks/useCart';

type Props = {children: ReactNode}

export const Context = ({children}: Props) => {
  return (
    <CartContextElement>
        {children}
    </CartContextElement>
  )
}