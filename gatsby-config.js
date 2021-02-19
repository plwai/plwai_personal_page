const proxy = require('http-proxy-middleware');

module.exports = {
  developMiddleware: (app) => {
    // For netlify lambda cli tool
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  siteMetadata: {
    title: 'Wai Pai Lee',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-flow',
    `gatsby-plugin-favicon`,
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
