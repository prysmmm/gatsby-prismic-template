import React, { forwardRef } from 'react';
import { useTheme } from '@chakra-ui/react';

import {
  AnimatedEclipse,
  AnimatedGradientText,
  Box,
  BoxProps,
  Flex,
  Grid,
  Heading,
} from '@/components/atoms';

interface Props extends BoxProps {}

export const HomeHero = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const theme = useTheme();

    return (
      <Box h="100vh" mt={150} ref={ref} {...props}>
        <Grid
          h="400px"
          columns={[1, 1, 1, 2, 2]}
          textAlign={[`center`, `center`, `center`, `left`, `left`]}
          justifyItems={[`center`, `center`, `center`, `left`, `left`]}
        >
          <Flex
            flexDir="column"
            position="relative"
            h="100%"
            justifyContent="center"
          >
            <AnimatedEclipse
              position="absolute"
              bg={theme.colors.grad2}
              filter="blur(100px)"
              w={400}
              h={400}
            />
            <Box position="relative" w="120%">
              <Heading variant="h1" color="white" mr={4}>
                <AnimatedGradientText words={[`.`]}>
                  Sites web modernes,/responsives et performants .
                </AnimatedGradientText>
              </Heading>
            </Box>
          </Flex>
          <Box />
        </Grid>
      </Box>
    );
  }
);
