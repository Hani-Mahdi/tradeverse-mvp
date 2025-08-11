import React, { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';
import TraeView from './TraeView';
import TraeChat from './TraeChat';
import { motion, AnimatePresence } from 'framer-motion';

const Trae = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-screen text-white flex justify-center items-center my-20 md:my-40">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-4/5 md:w-1/2 h-120 p-4 md:p-0 md:h-140 gradient-bg rounded-lg border-4 border-black flex flex-col items-center justify-around relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-around"
            >
              <TraeChat />
            </motion.div>
          ) : (
            <motion.div
              key="view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-around"
            >
              <TraeView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Trae;
