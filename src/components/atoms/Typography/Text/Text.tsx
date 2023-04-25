import React, { forwardRef } from 'react';
import {
  Text as ChakraText,
  TextProps,
  useStyleConfig,
} from '@chakra-ui/react';

export type TextVariant = `1` | `2` | `3` | `4` | `5`;

export interface Props extends TextProps {
  variant?: TextVariant;
}

export const Text = forwardRef<HTMLHeadingElement, Props>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;
    const style = useStyleConfig(`Text`, props);

    return (
      <ChakraText ref={ref} __css={style} {...rest}>
        {children}
      </ChakraText>
    );
  }
);
