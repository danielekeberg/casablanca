module.exports = {
    siteMetadata: {
      title: `Restaurant Website`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `menu`,
          path: `${__dirname}/content/menu`,
        },
      },
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-plugin-image`,
        options: {
        },
      },
    ],
  };
  