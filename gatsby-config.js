module.exports = {
  siteMetadata: {
    title: 'Wai Pai Lee',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-flow',
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-127112943-1',
        head: true,
      },
    },
  ],
};
