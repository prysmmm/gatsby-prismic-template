import React, { forwardRef } from 'react';
import {
  Heading as ChakraHeading,
  HeadingProps,
  useStyleConfig,
  useTheme,
} from '@chakra-ui/react';

export type GradientHeadingVariant = `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;

export interface Props extends HeadingProps {
  variant?: GradientHeadingVariant;
}

export const GradientHeading = forwardRef<HTMLHeadingElement, Props>(
  (props, ref): JSX.Element => {
    const { children, as, variant, ...rest } = props;
    const style = useStyleConfig(`Heading`, props);
    const theme = useTheme();

    return (
      <ChakraHeading
        ref={ref}
        as={as || variant}
        sx={style}
        bg={theme.colors.grad2}
        color="transparent"
        bgClip="text"
        {...rest}
      >
        {children}
      </ChakraHeading>
    );
  }
);
