import React, { forwardRef } from 'react';

import { Box, BoxProps, Flex, Heading } from '@/components/atoms';

interface Props extends BoxProps {}

export const HomeHero = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    return (
      <Box mt={150} ref={ref} {...props}>
        <Flex
          flexDir="column"
          position="relative"
          justifyContent="center"
          alignItems="center"
        >
          <Box position="relative">
            <Heading variant="h1" color="black">
              YOUR WEBSITE TEMPLATE
            </Heading>
          </Box>
        </Flex>
        <Box />
      </Box>
    );
  }
);
