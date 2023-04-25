import { colors, typography } from '@/theme/foundations';

import { Heading, Text } from '@/theme/components';

export const theme = {
  styles: {
    global: {
      ul: {
        listStyle: `none`,
      },
    },
  },

  colors,
  ...typography,
  components: {
    Heading,
    Text,
  },
};
