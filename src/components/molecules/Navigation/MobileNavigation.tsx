import React, { forwardRef } from 'react';
import { Collapse } from '@chakra-ui/react';

import { _Link } from '@/domain/entities';

import { Box, Container, Flex, Link } from '@/components/atoms';

export interface Props {
  homeLink?: _Link;
  isNavOpen: boolean;
  navLinks?: _Link[];
}

export const MobileNavigation = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { homeLink, isNavOpen, navLinks = [], ...rest } = props;

    return (
      <Box as="aside" position="relative" zIndex="docked">
        <Collapse in={isNavOpen}>
          <Box
            ref={ref}
            bg="white"
            position="fixed"
            top={0}
            right={0}
            bottom={0}
            left={0}
            w="100%"
            h="100%"
            {...rest}
          >
            <Box h="100%" pt={[10, 60]} pb={10} textAlign="center">
              <Container h="100%">
                <Flex h="100%" flexDirection="column">
                  <Flex
                    height="100%"
                    flexDirection="column"
                    justifyContent="center"
                    pt={[10, 5, 5]}
                  >
                    <Box mb={[4, 10]}>
                      <Link to={homeLink?.path || ``}>{homeLink?.label}</Link>
                    </Box>
                    {navLinks.map((navLink, key) => {
                      const isLast = key === navLinks.length - 1;

                      return (
                        <Box key={key} mb={isLast ? 0 : [3, 4, 10]}>
                          <Link to={navLink.path} partiallyActive>
                            {navLink.label}
                          </Link>
                        </Box>
                      );
                    })}
                  </Flex>
                </Flex>
              </Container>
            </Box>
          </Box>
        </Collapse>
      </Box>
    );
  }
);
