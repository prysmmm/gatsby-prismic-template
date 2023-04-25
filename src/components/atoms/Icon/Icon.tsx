import React from 'react';

import { Icon as icon, Icons } from '@/config';

export interface Props {
  icon: Icons;
}

export function Icon(props: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Icon {...props} icon={icon[props.icon] || `sensor-alert`} />
  );
}
