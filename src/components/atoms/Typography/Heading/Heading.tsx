import React, { forwardRef } from 'react';
import {
  Heading as ChakraHeading,
  HeadingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export type HeadingVariant = `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;

export interface Props extends HeadingProps {
  variant?: HeadingVariant;
}

export const Heading = forwardRef<HTMLHeadingElement, Props>(
  (props, ref): JSX.Element => {
    const { children, as, variant, ...rest } = props;
    const style = useStyleConfig(`Heading`, props);

    return (
      <ChakraHeading ref={ref} as={as || variant} sx={style} {...rest}>
        {children}
      </ChakraHeading>
    );
  }
);
