import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  fontFamily: `Biennale`,
};

const variants: SystemStyleObject = {
  1: {
    fontSize: `text.1`,
  },
  2: {
    fontSize: `text.2`,
  },
  3: {
    fontSize: `text.3`,
  },
  4: {
    fontSize: `text.4`,
  },
  5: {
    fontSize: `text.5`,
  },
};

const defaultProps: SystemStyleObject = {
  variant: `3`,
};

export const Text = {
  baseStyle,
  variants,
  defaultProps,
};
