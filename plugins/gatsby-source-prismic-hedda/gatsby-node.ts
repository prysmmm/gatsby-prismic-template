import { GatsbyNode } from 'gatsby';

import { PageGenerator } from './src/PageGenerator';

export const createPages: GatsbyNode[`createPages`] = async ({
  actions,
  graphql,
}) => {
  const { createPage, createRedirect } = actions;

  const pageFolder = `./src/components/pages`;

  const pageGenerator = new PageGenerator({
    createPage,
    createRedirect,
    graphql,
    pageFolder,
  });
  await pageGenerator.home.generate();
};
