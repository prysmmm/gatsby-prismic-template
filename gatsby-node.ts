import { GatsbyNode } from 'gatsby';
import readingTime from 'reading-time';
import path from 'path';
import { exec } from 'child_process';

export const onCreateDevServer: GatsbyNode[`onCreateDevServer`] = ({
  reporter,
}) => {
  exec(`yarn generate`, (error, stdout, stderr) => {
    if (error) {
      reporter.error(error.message);
      return;
    }
    if (stderr) {
      reporter.error(stderr);
      return;
    }
    reporter.info(stdout);
  });
};

export const onCreateWebpackConfig: GatsbyNode[`onCreateWebpackConfig`] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(`./src`),
      },
    },
  });
};

export const onCreateNode: GatsbyNode[`onCreateNode`] = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `PrismicBlogPost`) {
    const data = node.data as {
      body: {
        text: string;
      }[];
    };
    const content = data.body.reduce((acc, item) => `${acc} ${item.text}`, ``);
    const infos = readingTime(content);
    createNodeField({ node, name: `readingTime`, value: infos });
  }
};
