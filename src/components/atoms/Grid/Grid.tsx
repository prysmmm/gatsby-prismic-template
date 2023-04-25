import React, { forwardRef } from 'react';
import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';

export interface Props extends SimpleGridProps {}

export const Grid = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;

    return (
      <ChakraSimpleGrid ref={ref} {...rest}>
        {children}
      </ChakraSimpleGrid>
    );
  }
);
