import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { LayoutGroup } from 'framer-motion';
import { HoverContext } from './HoverContext';

type Props = {
  children: React.ReactNode;
  id?: string;
};

export const HoverHighlightList: React.FC<Props> = ({ children, id }) => {
  const [hovered, setHover] = React.useState(-1);

  return (
    <HoverContext.Provider value={{ hovered, setHover }}>
      <LayoutGroup id={id}>
        <Slot onMouseLeave={() => setHover(-1)}>{children}</Slot>
      </LayoutGroup>
    </HoverContext.Provider>
  );
};
