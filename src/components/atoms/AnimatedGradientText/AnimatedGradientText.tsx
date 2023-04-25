import React, { forwardRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

export interface Props {
  children: string;
  delay?: number;
  words: string[];
}

export const AnimatedGradientText = forwardRef<HTMLHeadingElement, Props>(
  (props, ref): JSX.Element => {
    const { children, delay = 1.2, words, ...rest } = props;

    const container: Variants = {
      hidden: {
        opacity: 0,
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.02,
          delayChildren: delay + i * 0.3,
        },
      }),
    };

    const child: Variants = {
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          opacity: {
            delay,
            duration: 0.2,
          },
          duration: 0.5,
        },
      },
      hidden: {
        opacity: 0,
        y: 80,
      },
    };

    const animatedText = (text: string, words: string[]) => {
      const splitText = text.split(` `);
      return splitText.map((word) => {
        const splitWord = word.split(``);

        return splitWord.map((letter, index) => (
          <motion.span
            className={words.includes(word) ? `outline` : ``}
            variants={child}
            key={index}
            custom={index}
            style={{ position: `relative`, display: `inline-block` }}
          >
            {index === splitWord.length - 1 ? `${letter}\u00A0` : letter}
          </motion.span>
        ));
      });
    };

    return (
      <chakra.div
        className="animated-heading"
        css={`
          .outline {
            color: #4db165;
          }
        `}
        ref={ref}
        {...rest}
      >
        {children.split(`/`).map((sentence, keyIndex) => (
          <motion.div
            style={{
              display: `block`,
              overflow: `hidden`,
              position: `relative`,
              justifyContent: `center`,
            }}
            key={keyIndex}
            custom={keyIndex}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {animatedText(sentence, words)}
          </motion.div>
        ))}
      </chakra.div>
    );
  }
);
