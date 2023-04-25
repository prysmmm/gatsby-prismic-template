import React, { forwardRef } from 'react';

import { _Link } from '@/domain/entities';

import { Box, BoxProps, Grid } from '@/components/atoms';

import { FooterLegal } from './FooterLegal';
import { FooterCopyright } from './FooterCopyright';
import { FooterLinks } from './FooterLinks';
import { FooterInfo } from './FooterInfo';

export interface Props extends BoxProps {
  pageLinks?: _Link[];
  legalLinks?: _Link[];
  supportLinks?: _Link[];
}

export const Footer = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { legalLinks, pageLinks = [], supportLinks = [], ...rest } = props;

    return (
      <Box
        ref={ref}
        as="footer"
        bg="black"
        px={[10, null, null, 10, 24]}
        py={20}
        borderTopLeftRadius={40}
        borderTopRightRadius={40}
        {...rest}
      >
        <Box mb={[20, null, null, null, 32]}>
          <Grid columns={[1, null, 2, 4]}>
            <FooterInfo mb={[5, null, null, 0]} />
            <FooterLinks
              heading="Pages"
              links={pageLinks}
              mb={[5, null, null, 0]}
            />
            <FooterLinks
              heading="Support"
              links={supportLinks}
              mb={[5, null, null, 0]}
            />
          </Grid>
        </Box>
        <FooterLegal links={legalLinks} mb={10} />
        <FooterCopyright />
      </Box>
    );
  }
);
