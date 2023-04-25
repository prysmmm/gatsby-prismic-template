import React, { ReactNode } from 'react';

import { _Link } from '@/domain/entities';

import { Box, BoxProps, Link, Text } from '@/components/atoms';

interface Props extends BoxProps {
  heading: ReactNode;
  links: _Link[];
}

export function FooterLinks(props: Props): JSX.Element {
  const { heading, links, ...rest } = props;

  const renderLinks = links.map((link, key) => (
    <Box
      key={key}
      as="li"
      mb={4}
      _last={{ mb: 0 }}
      sx={{
        '.activeFooter': {
          bg: `linear-gradient(90deg, #A770EF 0%, #CF8BF3 50%, #FDB99B 100%)`,
          color: `transparent`,
          bgClip: `text`,
        },
      }}
    >
      <Link to={link.path}>{link.label}</Link>
    </Box>
  ));

  return (
    <Box {...rest}>
      <Box mb={5}>
        <Text variant="3" fontWeight="semibold">
          {heading}
        </Text>
      </Box>
      <Box>
        <Box as="ul">{renderLinks}</Box>
      </Box>
    </Box>
  );
}
