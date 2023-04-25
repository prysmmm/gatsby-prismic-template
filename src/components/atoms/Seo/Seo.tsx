import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Maybe } from '@/types';

import { isBrowser } from '@/utils';

type Meta = JSX.IntrinsicElements[`meta`];

export interface Props {
  children?: ReactNode;
  title?: Maybe<string>;
  description?: Maybe<string>;
  lang?: string;
  meta?: Meta[];
  ogType?: `article` | `website`;
}

export function Seo(props: Props): JSX.Element {
  const { children, ogType, title, lang, description } = props;
  const { site } = useStaticQuery(query);

  const metaTitle = title || (site.siteMetadata.title as string);

  const metaDescription =
    description || (site.siteMetadata.description as string);

  const currentPage = isBrowser ? location.href : undefined;

  const metaLang = lang;

  const currentUrl = currentPage
    ? `${site.siteMetadata.siteUrl}${currentPage}`
    : ``;

  const renderCurrentPage = () => {
    return <link rel="canonical" href={currentUrl} />;
  };

  return (
    <>
      <title>
        {metaTitle}
        {` `}|{` `}
        {site.siteMetadata.title}
      </title>
      <meta name="lang" content={metaLang} />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:url" content={currentUrl} />
      <meta name="og:type" content={ogType || `website`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Hedda.health" />
      <meta name="twitter:title" content={title || ``} />
      <meta name="fb:app_id" content="1357918094709117" />
      {children}
      {renderCurrentPage()}
      <link
        rel="alternate"
        href={site.siteMetadata.siteUrl}
        hrefLang="x-default"
      />
    </>
  );
}

export const query = graphql`
  fragment AlternateLanguageFragment on PrismicAlternateLanguageType {
    lang
    uid
    type
  }
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`;
