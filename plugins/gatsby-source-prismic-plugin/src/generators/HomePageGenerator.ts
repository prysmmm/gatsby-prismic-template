import path from 'path';

import { GatsbyPageGenerator } from './GatsbyPageGenerator';
import { _PageGenerator, Edges } from '../types';
import { graphql } from '../utils';

const query = graphql`
  {
    homePages: allPrismicHomePage {
      edges {
        node {
          uid
          lang
        }
      }
    }
  }
`;

export class HomePageGenerator
  extends GatsbyPageGenerator
  implements _PageGenerator
{
  async generate() {
    const res = await this.graphql<{
      homePages: Edges<{ uid: string; lang: string }>;
    }>(query);

    res.data?.homePages.edges.map((edge) => {
      const homePage = edge.node;
      const { lang } = homePage;

      this.createPage({
        path: `/${homePage.uid}`,
        component: path.resolve(`${this.pageFolder}/Home/Home.tsx`),
        context: {
          lang,
        },
      });
    });
  }
}
