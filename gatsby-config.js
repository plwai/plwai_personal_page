module.exports = {
  siteMetadata: {
    title: `Wai Pai Lee`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/favicon.png`,
      },
    },
  ],
};
