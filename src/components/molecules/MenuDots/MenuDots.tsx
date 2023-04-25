import React, { forwardRef } from 'react';

import { Box, Grid, GridProps, MotionButton } from '@/components/atoms';

function Dot(): JSX.Element {
  return <Box bg="black" borderRadius="full" w={1.5} h={1.5} />;
}

export interface Props extends GridProps {
  isNavOpen: boolean;
}

export const MenuDots = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { isNavOpen, ...rest } = props;

    return (
      <MotionButton
        animate={{
          rotate: isNavOpen ? 45 : 0,
          transition: {
            duration: 0.1,
          },
        }}
        h={10}
        px={2}
        _hover={{ color: `transparent` }}
        bgColor="transparent"
        borderRadius={2}
      >
        <Grid ref={ref} position="relative" columns={2} spacing={3} {...rest}>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Grid>
      </MotionButton>
    );
  }
);
