import React, { forwardRef, MouseEventHandler } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import { _Link } from '@/domain/entities';

import {
  Box,
  Container,
  Flex,
  FlexProps,
  Link,
  LogoLower,
  MotionBox,
} from '@/components/atoms';
import { MenuDots, Navigation } from '@/components/molecules';

const maxScrollY = 100;

export interface Props extends FlexProps {
  homeLink: _Link;
  navLinks?: _Link[];
  onNavClick: MouseEventHandler;
  isNavOpen: boolean;
}

export const Header = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { homeLink, onNavClick, isNavOpen, navLinks, ...rest } = props;
    const { scrollY } = useScroll();
    const boxShadow = useTransform(
      scrollY,
      [0, maxScrollY],
      [``, `0 0 0 1px rgba(0, 0, 0, 0.05)`]
    );

    const blur = useTransform(
      scrollY,
      [0, maxScrollY],
      [`blur(0px)`, `blur(10px)`]
    );

    return (
      <MotionBox
        ref={ref}
        as="header"
        style={{
          boxShadow: boxShadow as any as string,
          backdropFilter: blur as any as string,
          [`WebkitBackdropFilter` as any]: blur as any as string,
        }}
        top={0}
        position="sticky"
        zIndex="11"
        bg="rgba(0, 0, 0, 0.4)"
        borderBottomWidth={1}
        borderBottomStyle="solid"
        borderBottomColor="black"
        h="65px"
        justifyContent="center"
        alignItems="center"
      >
        <Container>
          <Flex
            h="65px"
            justifyContent="space-between"
            alignItems="center"
            {...rest}
          >
            <Box
              order={1}
              display={[`block`, null, null, `none`]}
              w="107px"
              pl={5}
            >
              <MenuDots isNavOpen={isNavOpen} onClick={onNavClick} />
            </Box>
            <Box
              as="figure"
              order={[2, null, null, 1]}
              alignItems="center"
              justifyContent="center"
              mr={5}
            >
              <Link
                to={homeLink.path}
                title={homeLink.label}
                display="inline-block"
              >
                <LogoLower width="100" height="28.5" />
              </Link>
            </Box>
            <Navigation navLinks={navLinks} order={2} />
          </Flex>
        </Container>
      </MotionBox>
    );
  }
);
