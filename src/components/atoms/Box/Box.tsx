import React, { forwardRef } from 'react';
import { Box as ChakraBox, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export interface Props extends BoxProps {}

export const Box = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;

    return (
      <ChakraBox ref={ref} {...rest}>
        {children}
      </ChakraBox>
    );
  }
);

export const MotionBox = motion(Box);
