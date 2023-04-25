import React from 'react';
import { Link } from '@chakra-ui/react';

import { _Link } from '@/domain/entities';
import { SocialMedia } from '@/domain/types';

import { Box, BoxProps, Conditional, Flex, Text } from '@/components/atoms';

import { useGetUniqueKey, useTranslation } from '@/hooks';

interface Props extends BoxProps {
  onSocialMediaLinkClick?: (socialMedia: SocialMedia) => void;
}

export function FooterSocial(props: Props): JSX.Element {
  const { onSocialMediaLinkClick, ...rest } = props;
  const { t } = useTranslation();
  const getUniqueKey = useGetUniqueKey();

  const socialMediaLinks: _Link<SocialMedia>[] = [
    {
      label: `facebook`,
      path: `https://www.facebook.com/heddahealth/`,
    },
    {
      label: `instagram`,
      path: `https://www.instagram.com/heddahealth/`,
    },
    {
      label: `tiktok`,
      path: `https://www.tiktok.com/@heddahealth`,
    },
    {
      label: `linkedin`,
      path: `https://www.linkedin.com/company/heddahealth`,
    },
  ];

  const renderSocials = socialMediaLinks.map((socialMediaLink, key) => (
    <Flex alignItems="center" key={getUniqueKey(socialMediaLink)}>
      <Text
        as={(rest) => (
          <Link
            variant="footer"
            onClick={() =>
              onSocialMediaLinkClick?.(socialMediaLink.label || `facebook`)
            }
            href={socialMediaLink.path}
            target="_blank"
            rel="noopener noreferrer"
            title={t(`footer.${socialMediaLink.label}`)}
            {...rest}
          />
        )}
        variant="4"
        color="gray.500"
        fontWeight="medium"
      >
        {t(`footer.${socialMediaLink.label}`)}
      </Text>
      <Conditional isTrue={key < socialMediaLinks.length - 1}>
        <Box px={2}>
          <Text variant="4" color="gray.500" fontWeight="semibold">
            ·
          </Text>
        </Box>
      </Conditional>
    </Flex>
  ));

  return (
    <Box {...rest}>
      <Box mb={5}>
        <Text variant="3" fontWeight="semibold">
          {t(`footer.followUs`)}
        </Text>
      </Box>
      <Flex
        flexWrap={[`wrap`, null, null, `wrap`, `nowrap`]}
        alignItems="center"
      >
        {renderSocials}
      </Flex>
    </Box>
  );
}
