import React, { forwardRef, ReactNode, useState } from 'react';
import { graphql } from 'gatsby';
import { RemoveScroll } from 'react-remove-scroll';

import { _Layout } from '@/domain/entities';

import { Box, BoxProps, Container } from '@/components/atoms';
import { MobileNavigation } from '@/components/molecules';
import { Header } from '@/components/organisms';

interface Props extends BoxProps {
  children: ReactNode;
  data: _Layout;
  overflowProps?: string;
  withContainer?: boolean;
}

export const Layout = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const {
      children,
      data,
      withContainer,
      overflowProps = `hidden`,
      ...rest
    } = props;
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const onNavClick = () => {
      if (isNavOpen) {
        setIsNavOpen(() => false);
      } else {
        setIsNavOpen(() => true);
      }
    };

    const renderBody = (withContainer: boolean = true) => {
      const body = (
        <Box as="main" pt={10}>
          {children}
        </Box>
      );
      if (withContainer) {
        return <Container>{body}</Container>;
      }
      return body;
    };

    return (
      <Box ref={ref} as="section" h="100vh" bg="blue.75" {...rest}>
        <RemoveScroll enabled={isNavOpen}>
          <MobileNavigation isNavOpen={isNavOpen} homeLink={data.homeLink} />
        </RemoveScroll>
        <Header
          homeLink={data.homeLink}
          onNavClick={onNavClick}
          isNavOpen={isNavOpen}
        />
        <Box as="section" overflow="hidden">
          {renderBody(withContainer)}
        </Box>
      </Box>
    );
  }
);

export const layoutDataFragment = graphql`
  fragment LayoutDataFragment on Query {
    ...HomePageFragment
  }
`;
