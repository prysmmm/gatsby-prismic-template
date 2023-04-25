import dotenv from 'dotenv';

import type { GatsbyConfig } from 'gatsby';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `YOUR_TITLE`,
    description: `YOUR_DESCRIPTION`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        output: `/robots.txt`,
        resolveEnv: () =>
          process.env.GATSBY_IS_PROD ? `production` : `development`,
        env: {
          development: {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
          },
          production: {
            policy: [
              {
                userAgent: `*`,
                allow: [`/`],
                disallow: [`/404`],
              },
            ],
          },
        },
      },
    },
    `gatsby-source-prismic-plugin`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        lang: `*`,
        imageImgixParams: {
          auto: `compress,format`,
          fit: `max`,
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
  ],
};

export default config;
