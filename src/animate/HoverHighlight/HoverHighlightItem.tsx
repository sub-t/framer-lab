import React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { HoverContext } from './HoverContext';

const Container = motion(Slot);

type Props = {
  children: React.ReactNode;
  Highlight: React.ReactNode;
  id: number;
};

export const HoverHighlightItem = React.forwardRef<HTMLElement, Props>(
  ({ children, Highlight, id }, forwardedRef) => {
    const { hovered, setHover } = React.useContext(HoverContext);

    return (
      <Slot
        style={{ position: 'relative' }}
        onFocus={() => setHover(id)}
        onMouseEnter={() => setHover(id)}
        ref={forwardedRef}
      >
        <Slottable>{children}</Slottable>
        {hovered === id ? (
          <Container
            transition={{
              layout: {
                duration: 0.2,
                ease: 'easeOut',
              },
            }}
            layoutId="highlight"
          >
            {Highlight}
          </Container>
        ) : null}
      </Slot>
    );
  },
);

HoverHighlightItem.displayName = 'HoverHighlightItem';
