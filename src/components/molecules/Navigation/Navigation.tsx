import React, { forwardRef, useMemo } from 'react';

import { _Link } from '@/domain/entities';

import { Box, Flex, FlexProps, Link } from '@/components/atoms';

export interface Props extends FlexProps {
  navLinks: _Link[] | undefined;
}

export const Navigation = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { navLinks = [], ...rest } = props;

    const _navLinks = useMemo(() => {
      return navLinks;
    }, [navLinks]);

    return (
      <Flex
        ref={ref}
        as="nav"
        display={[`none`, null, null, `flex`]}
        alignItems="center"
        {...rest}
      >
        {_navLinks.map((navLink, key) => {
          const isLast = key === _navLinks.length - 1;

          return (
            <Flex
              key={key}
              alignItems="center"
              sx={{
                '.activeHeader': {
                  bg: `linear-gradient(90deg, #A770EF 0%, #CF8BF3 50%, #FDB99B 100%)`,
                  color: `transparent`,
                  bgClip: `text`,
                },
              }}
            >
              <Link key={navLink.path} to={navLink.path} partiallyActive>
                {navLink.label}
              </Link>
              {!isLast && <Box px={5}>·</Box>}
            </Flex>
          );
        })}
      </Flex>
    );
  }
);
