import React, { forwardRef, useEffect } from 'react';

import { isBrowser } from '@/utils';

import { Box, BoxProps } from '../Box';

export interface Props extends BoxProps {
  bg: string;
  filter: string;
  size?: number;
}

export const AnimatedEclipse = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { bg, filter, size, ...rest } = props;

    function moveGradient(
      event: MouseEvent,
      gradientEclipse: HTMLDivElement | null | undefined
    ) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

      if (gradientEclipse) {
        const gradientMove = gradientEclipse;
        gradientMove.style.background = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, rgb(52, 232, 158), rgb(15, 52, 67))`;
      }
    }

    useEffect(() => {
      const eclipseGradient = isBrowser
        ? document.querySelector<HTMLDivElement>(`.gradient-eclipse`)
        : undefined;
      window.addEventListener(`mousemove`, (e) =>
        moveGradient(e, eclipseGradient)
      );
      return () => {
        window.removeEventListener(`mousemove`, (e) =>
          moveGradient(e, eclipseGradient)
        );
      };
    }, [moveGradient]);

    return (
      <Box
        position="fixed"
        className="gradient-eclipse"
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
