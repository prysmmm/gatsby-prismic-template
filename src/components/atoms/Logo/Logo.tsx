import React from 'react';
import { createIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

export const Logo = createIcon({
  displayName: `Logo`,
  viewBox: `0 0 797 228`,
  path: <div></div>,
});

export const MotionLogo = motion(Logo);
