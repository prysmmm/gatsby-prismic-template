import { GatsbyNode } from 'gatsby';
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
