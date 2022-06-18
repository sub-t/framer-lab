import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const Container = motion(Slot);

type Custom = {
  x?: number;
  duration?: number;
};

const defaultCustom: Custom = {
  x: 8,
  duration: 0.6,
};

const config = (custom?: Custom): React.ComponentProps<typeof Container> => {
  const { x, duration } = { ...defaultCustom, ...custom };

  return {
    initial: {
      x: 0,
    },
    whileHover: {
      x,
    },
    transition: {
      duration,
    },
  };
};

type Props = {
  children: React.ReactNode;
  custom?: Custom;
};

export const HoverMove = React.forwardRef<
  React.ElementRef<typeof Container>,
  Props
>(({ children, custom }, forwardedRef) => (
  <Container {...config(custom)} ref={forwardedRef}>
    {children}
  </Container>
));

HoverMove.displayName = 'HoverMove';
