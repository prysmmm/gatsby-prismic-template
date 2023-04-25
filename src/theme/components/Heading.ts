import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  fontWeight: `extrabold`,
};

const variants: SystemStyleObject = {
  h1: {
    fontSize: [`2.5rem`, null, `2.75rem`, null, `3rem`],
  },
  h2: {
    fontSize: [`2.25rem`, null, `2.5rem`, null, `2.5rem`],
  },
  h3: {
    fontSize: [`1.75rem`, null, `2rem`, null, `2.25rem`],
    fontWeight: [500, null, 550, null, 600],
  },
  h4: {
    fontSize: [`1.5rem`, null, `1.5rem`, null, `2rem`],
  },
  h5: {
    fontSize: [`1.25rem`, null, `1.5rem`, null, `1.5rem`],
  },
  h6: {
    fontSize: [`mobile.h6`, null, `desktop.h6`],
  },
};

const defaultProps: SystemStyleObject = {
  variant: `h4`,
};

export const Heading = {
  baseStyle,
  variants,
  defaultProps,
};
