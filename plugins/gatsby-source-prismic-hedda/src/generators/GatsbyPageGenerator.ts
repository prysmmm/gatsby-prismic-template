import { PageGeneratorProps } from '../types';

export class GatsbyPageGenerator {
  createPage: PageGeneratorProps[`createPage`];
  createRedirect: PageGeneratorProps[`createRedirect`];
  graphql: PageGeneratorProps[`graphql`];
  pageFolder: PageGeneratorProps[`pageFolder`];

  constructor({
    createPage,
    createRedirect,
    graphql,
    pageFolder,
  }: PageGeneratorProps) {
    this.createPage = createPage;
    this.createRedirect = createRedirect;
    this.graphql = graphql;
    this.pageFolder = pageFolder;
  }
}
