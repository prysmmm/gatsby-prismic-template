import React, { forwardRef } from 'react';
import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export interface Props extends FlexProps {}

export const Flex = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;

    return (
      <ChakraFlex ref={ref} {...rest}>
        {children}
      </ChakraFlex>
    );
  }
);

export const MotionFlex = motion(Flex);
