import React, { forwardRef } from 'react';

import { Box, BoxProps } from '../Box';

export interface Props extends BoxProps {
  bg: string;
  filter: string;
  size?: number;
}

export const Eclipse = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { bg, filter, size, ...rest } = props;

    return (
      <Box
        ref={ref}
        bg={bg}
        filter={filter}
        borderRadius="full"
        width={size || 800}
        height={size || 800}
        borderWidth="100%"
        willChange="filter"
        {...rest}
      />
    );
  }
);
