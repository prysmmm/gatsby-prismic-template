import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { toLayout } from '@/domain/mappings';
import { _LayoutData, GatsbyPrismicHomePage } from '@/domain/entities';

import { Seo } from '@/components/atoms';
import { Layout } from '@/components/layouts';
import { HomeHero } from '@/components/pages/Home/HomeHero';

import { useSeo } from '@/hooks';

interface HomeData extends _LayoutData {
  homePage: GatsbyPrismicHomePage;
}

interface Props extends PageProps<HomeData> {
  homePage: GatsbyPrismicHomePage;
}

function Home(props: Props): JSX.Element {
  const { data } = props;

  const layout = toLayout(data);
  //const homePage = toHomePage(data.homePage);

  return (
    <Layout data={layout}>
      <HomeHero />
    </Layout>
  );
}

export function Head(props: Props) {
  const { data } = props;

  const seo = useSeo(data.homePage);

  return <Seo {...seo} />;
}

export const homePageQuery = graphql`
  fragment HomePageFragment on Query {
    homePage: prismicHomePage {
      lang
      type
      uid
      data {
        title
        seo_title
        seo_description
      }
    }
  }
  query HomePageQuery {
    ...LayoutDataFragment
  }
`;

export default Home;
