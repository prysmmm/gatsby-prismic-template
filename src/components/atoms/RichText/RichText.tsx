import React, { Children, ReactNode } from 'react';
import { graphql } from 'gatsby';
import { Link as ChakraLink } from '@chakra-ui/react';
import {
  Elements,
  RichText as PrismicRichText,
  RichTextProps,
} from 'prismic-reactjs';

import { Company } from '@/config';

import { Box, Heading, Link, Text } from '@/components/atoms';

import { createLinkPath } from '@/utils';

const regex = new RegExp(`{{\\s?(\\w+)\\s?}}`, `gm`);

const tags = {
  '{{ address }}': Company.address,
  '{{ bce }}': Company.number,
  '{{ company }}': Company.name,
  '{{ email }}': Company.email,
  '{{ phone }}': Company.phone,
};

const replaceTag = (text: ReactNode): ReactNode => {
  if (typeof text === `string`) {
    return text.replace(regex, (match) => {
      const tagMatch = match as keyof typeof tags;
      if (tags[tagMatch]) {
        return tags[tagMatch];
      }
      return match;
    });
  }

  return text;
};

const replaceChildrenWithTag = (children: ReactNode[]): ReactNode =>
  Children.map<ReactNode, ReactNode>(Children.toArray(children), (child) =>
    replaceTag(child)
  );

export type HTMLSerializer<T> = (
  type: Elements,
  element: any,
  content: string,
  children: T[],
  key: string,
  props: any
) => T | null;

export const htmlSerializer: HTMLSerializer<ReactNode> = (
  type,
  element,
  _content,
  children,
  key,
  props: Props
) => {
  const { blogPosts, shouldHaveElements, ...rest } = props;
  const childrenWithTag = replaceChildrenWithTag(children);

  switch (type) {
    case Elements.list:
      return (
        <Box as="ul" listStyleType="circle" pl={10} {...rest}>
          {children}
        </Box>
      );
    case Elements.listItem:
      return (
        <Box as="li" mb={4} {...rest}>
          {childrenWithTag}
        </Box>
      );
    case Elements.oList:
      return (
        <Box as={(props) => <ol type="a" {...props} />} pl={10} {...rest}>
          {children}
        </Box>
      );
    case Elements.oListItem:
      return (
        <Box as="li" mb={4} {...rest}>
          {childrenWithTag}
        </Box>
      );
    case Elements.heading3:
      return (
        <Heading key={key} variant="h3" my={4} mt={10} _first={{ mt: 0 }}>
          {childrenWithTag}
        </Heading>
      );
    case Elements.heading5:
      return (
        <Heading key={key} variant="h5" my={4} mt={10} _first={{ mt: 0 }}>
          {childrenWithTag}
        </Heading>
      );
    case Elements.heading6:
      return (
        <Heading key={key} variant="h6" my={4}>
          {childrenWithTag}
        </Heading>
      );
    case Elements.paragraph:
      if (shouldHaveElements) {
        return (
          <Text key={key} {...rest}>
            {childrenWithTag}
          </Text>
        );
      }
      return childrenWithTag;

    case Elements.hyperlink: {
      if (element.data.link_type === `Web`) {
        return (
          <ChakraLink
            href={element.data.url}
            target="_blank"
            rel="noopener noreferrer"
            textDecoration="underline"
          >
            {children}
          </ChakraLink>
        );
      }

      const path = (): string => {
        return createLinkPath([element.data.lang, element.data.uid]);
      };
      // const to = `/${element.data.lang}/${element.data.uid}`;

      return (
        <Link
          key={key}
          to={path()}
          style={{
            textDecoration: `underline`,
          }}
        >
          {children}
        </Link>
      );
    }
    default:
      return null;
  }
};

interface GenericProps {
  [index: string]: any;
}

export interface Props extends GenericProps, RichTextProps {
  shouldHaveElements?: boolean;
}

export function RichText(props: Props): JSX.Element {
  const { render, shouldHaveElements, ...rest } = props;

  return (
    <PrismicRichText
      htmlSerializer={(type, element, content, children, key) =>
        htmlSerializer(type, element, content, children, key, {
          shouldHaveElements,
          ...rest,
        })
      }
      render={render}
    />
  );
}

export const fragment = graphql`
  fragment RichTextFragment on PrismicStructuredTextType {
    html
    richText
    text
  }
`;
