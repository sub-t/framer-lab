import React from 'react';
import { LayoutGroup } from 'framer-motion';
import { HoverContext } from './HoverContext';

type Props = {
  children: React.ReactNode;
  id?: string;
};

export const HoverHighlightList: React.FC<Props> = ({ children, id }) => {
  const [hovered, setHover] = React.useState(-1);

  const newChildren = React.cloneElement(children as React.ReactElement, {
    onMouseLeave: () => setHover(-1),
  });

  return (
    <HoverContext.Provider value={{ hovered, setHover }}>
      <LayoutGroup id={id}>{newChildren}</LayoutGroup>
    </HoverContext.Provider>
  );
};
