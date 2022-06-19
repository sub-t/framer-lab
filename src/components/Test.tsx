import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const MotionSlot = motion(Slot);

export const Test = () => (
  <MotionSlot whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
    <MotionSlot
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <button className="px-4 py-2 rounded-lg bg-teal-900 text-teal-50">Button</button>
    </MotionSlot>
  </MotionSlot>
);
