import React from 'react';

import { Company } from '@/config';

import { Box, BoxProps, Text } from '@/components/atoms';

interface Props extends BoxProps {}

export function FooterCopyright(props: Props): JSX.Element {
  return (
    <Box textAlign="center" {...props}>
      <Text variant="4" color="gray.400" fontWeight="semibold">
        &copy;
        {` `}
        {new Date().getFullYear()}
        {` `}
        {Company.name}
      </Text>
    </Box>
  );
}
