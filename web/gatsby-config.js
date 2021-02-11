require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://demo-center.searchengineunity.com', // update to new netlify URL
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      // options: {
      //   webFontsConfig: {
      //     fonts: {
      //       google: [
      //         {
      //           family: `Montserrat`,
      //           variants: [`300`, `400`, `500`],
      //         },
      //       ],
      //     },
      //   },
      // },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '2xtgdu8l',
        dataset: 'production',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
