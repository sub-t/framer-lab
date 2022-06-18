import React from 'react';
import { LayoutGroup } from 'framer-motion';
import { HoverContext } from './HoverContext';

type Props = {
  children: React.ReactNode;
};

export const HoverHighlightList: React.FC<Props> = ({ children }) => {
  const [hovered, setHover] = React.useState(-1);

  return (
    <HoverContext.Provider value={{ hovered, setHover }}>
      <div onMouseLeave={() => setHover(-1)}>
        <LayoutGroup id={children?.toString()}>{children}</LayoutGroup>
      </div>
    </HoverContext.Provider>
  );
};
