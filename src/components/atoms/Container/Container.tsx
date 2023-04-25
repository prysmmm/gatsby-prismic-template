import React, { forwardRef } from 'react';
import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export interface Props extends ContainerProps {}

export const Container = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;

    return (
      <ChakraContainer ref={ref} maxW="container.xl" {...rest}>
        {children}
      </ChakraContainer>
    );
  }
);

export const MotionContainer = motion(Container);
