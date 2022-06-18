import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const Container = motion(Slot);

type Custom = {
  y?: number;
  once?: boolean;
  amount?: number;
  duration?: number;
};

const defaultCustom: Custom = {
  y: 20,
  once: true,
  amount: 0.3,
  duration: 0.6,
};

const config = (custom?: Custom): React.ComponentProps<typeof Container> => {
  const { y, once, amount, duration } = { ...defaultCustom, ...custom };

  return {
    initial: {
      opacity: 0,
      y,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once,
      amount,
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

export const Enter = React.forwardRef<
  React.ElementRef<typeof Container>,
  Props
>(({ children, custom }, forwardedRef) => (
  <Container {...config(custom)} ref={forwardedRef}>
    {children}
  </Container>
));

Enter.displayName = 'Enter';
