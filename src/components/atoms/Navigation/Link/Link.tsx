import React, { ElementType, forwardRef } from 'react';
import { GatsbyLinkProps, graphql, Link as GatsbyLink } from 'gatsby';
import {
  Link as ChakraLink,
  LinkProps,
  useStyleConfig,
} from '@chakra-ui/react';
import { onlyText } from 'react-children-utilities';

export type LinkVariant = `default`;

export interface Props extends GatsbyLinkProps<any>, Omit<LinkProps, `color`> {
  variant?: LinkVariant;
}

export const Link = forwardRef<HTMLAnchorElement, Props>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;
    const style = useStyleConfig(`Link`, props);

    return (
      <ChakraLink
        ref={ref}
        sx={style}
        title={onlyText(children)}
        {...rest}
        as={
          ((props) => (
            <GatsbyLink activeClassName="activeFooter" {...props} />
          )) as ElementType
        }
      >
        {children}
      </ChakraLink>
    );
  }
);

export const query = graphql`
  fragment LinkFragment on PrismicLinkType {
    uid
    lang
    type
  }
`;
