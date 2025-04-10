import { ReactNode } from 'react';
import { CartContextElement } from '../hooks/useCart';
import ThemeContext from '../hooks/useTheme';

type Props = {children: ReactNode}

export const Context = ({children}: Props) => {
  return (
      <ThemeContext>
        <CartContextElement>
            {children}
        </CartContextElement>
      </ThemeContext>
  )
}