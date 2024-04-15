import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimateFrameProps {
  children: ReactNode;
}

const AnimateFrame: React.FC<AnimateFrameProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateFrame;
