import React, { forwardRef } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Icons } from '@/config';

import { Icon } from '../Icon';

export type ButtonSize = `sm` | `md`;
export type ButtonVariant = ``;

export interface Props extends Omit<ButtonProps, `leftIcon` | `rightIcon`> {
  size?: ButtonSize;
  leftIcon?: Icons;
  rightIcon?: Icons;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (props, ref): JSX.Element => {
    const { children, rightIcon, leftIcon, ...rest } = props;

    return (
      <ChakraButton
        ref={ref}
        {...rest}
        iconSpacing={3}
        leftIcon={leftIcon ? <Icon icon={leftIcon} /> : undefined}
        rightIcon={rightIcon ? <Icon icon={rightIcon} /> : undefined}
      >
        {children}
      </ChakraButton>
    );
  }
);

export const MotionButton = motion(Button);
