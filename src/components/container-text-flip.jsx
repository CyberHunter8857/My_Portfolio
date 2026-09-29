'use client';
import React, { useState, useEffect, useId } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function ContainerTextFlip({
  words = ['better', 'modern', 'beautiful', 'awesome'],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (20px on each side for smaller component)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 20;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.span
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        'relative inline-block rounded-md px-1 py-0.5 text-center font-bold sm:px-2 sm:py-1',
        '[background:linear-gradient(to_right,#a855f7,#7c3aed,#2563eb)]',
        // Very subtle base glow
        'shadow-[0_0_4px_rgba(168,85,247,0.15),0_0_8px_rgba(124,58,237,0.1),0_0_12px_rgba(37,99,235,0.08)]',
        'border border-purple-300/30',
        'font-semibold text-white',
        // Reduced hover glow
        'hover:shadow-[0_0_15px_rgba(168,85,247,0.4),0_0_25px_rgba(124,58,237,0.25),0_0_35px_rgba(37,99,235,0.2)]',
        'transition-all duration-300 ease-in-out',
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: 'easeInOut',
        }}
        className={cn('inline-block', textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.span>
  );
}
