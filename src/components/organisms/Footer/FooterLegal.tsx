import React from 'react';

import { _Link } from '@/domain/entities';

import { Box, Flex, FlexProps, Link } from '@/components/atoms';

interface Props extends FlexProps {
  links: _Link[] | undefined;
}

export function FooterLegal(props: Props): JSX.Element {
  const { links, ...rest } = props;

  const renderLegalPages = links?.map((link, key) => (
    <Box key={key} mb={[2, null, null, 0]}>
      <Link to={link.path} partiallyActive>
        {link.label}
      </Link>
    </Box>
  ));

  return (
    <Flex
      display={[null, null, null, `flex`]}
      justifyContent="space-between"
      px={[null, null, null, 10, 20]}
      textAlign="center"
      {...rest}
    >
      {renderLegalPages}
    </Flex>
  );
}
