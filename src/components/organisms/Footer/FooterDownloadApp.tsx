import React from 'react';
import { useTheme } from '@chakra-ui/react';

import { Platform } from '@/domain/types';

import { Box, BoxProps, Text } from '@/components/atoms';
import { StoreBadges } from '@/components/molecules';

import { useTranslation } from '@/hooks';

import { useI18n } from '@/state';

interface Props extends BoxProps {
  handleStoreBadgeClick?: (platform: Platform) => void;
}

export function FooterDownloadApp(props: Props): JSX.Element {
  const { handleStoreBadgeClick, ...rest } = props;
  const { country } = useI18n();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box {...rest}>
      <Box mb={5}>
        <Text
          bg={theme.colors.grad1}
          bgClip="text"
          color="transparent"
          variant="3"
          fontWeight="semibold"
          w="fit-content"
        >
          {t(`footer.download`)}
        </Text>
      </Box>
      <Box>
        <StoreBadges
          flexWrap={[null, null, null, `wrap`, `nowrap`]}
          lang={country?.lang}
          onStoreBadgeClick={handleStoreBadgeClick}
        />
      </Box>
    </Box>
  );
}
