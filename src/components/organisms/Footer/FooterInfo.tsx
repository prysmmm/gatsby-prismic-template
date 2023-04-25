import React from 'react';

import { Company } from '@/config';

import { Box, BoxProps, Heading } from '@/components/atoms';

interface Props extends BoxProps {}

export function FooterInfo(props: Props): JSX.Element {
  return (
    <Box {...props}>
      <Box mb={5}>
        <Heading variant="h5">{Company.name}</Heading>
      </Box>
    </Box>
  );
}
