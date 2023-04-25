import { GatsbyConfig, PluginRef } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(`process.env.GATSBY_IS_PROD`, process.env.GATSBY_IS_PROD);

const isProd = process.env.GATSBY_IS_PROD === `true`;

const pluginsEnabledOnlyInProd: string[] = [`gatsby-plugin-hotjar`];

const checkPlugin = (plugin: PluginRef): boolean => {
  if (isProd) {
    return true;
  } else {
    return !pluginsEnabledOnlyInProd.includes(
      typeof plugin === `string` ? plugin : plugin.resolve
    );
  }
};

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: `3D Beer`,
    description: `Une bière belge`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        siteId: process.env.HOTJAR_SITE_ID,
      },
    },
    `gatsby-plugin-image`,
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
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
    {
      resolve: `gatsby-plugin-polyfill-io`,

      options: {
        features: [`smoothscroll`],
      },
    },
    `gatsby-source-prismic-hedda`,
    `gatsby-transformer-sharp`,
  ].filter(checkPlugin),
};

export default config;
