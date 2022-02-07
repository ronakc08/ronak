module.exports = {
  siteMetadata: {
    title: "Ronak Chougule",
    description: "Ronak Chougule's personal website.",
    titleTemplate: `%s | Ronak Chougule`,
    url: "https://www.gzheng.dev/",
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RonakChougule`,
        short_name: `RonakChougule`,
        start_url: `/`,
        background_color: `#f4f1ec`,
        theme_color: `#728073`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
