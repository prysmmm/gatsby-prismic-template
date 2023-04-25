import React from 'react';
import { Global } from '@emotion/react';

import { fonts } from '@/theme/foundations';

export function Fonts(): JSX.Element {
  return <Global styles={fonts} />;
}
