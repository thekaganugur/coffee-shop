module.exports = {
  siteMetadata: {
    title: `We make perfect coffee for you`,
    description: `Lorem ipsum dolor sit amet.`,
    author: `@kgnugur`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coffee shop`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E4E0D9`,
        theme_color: `#E4E0D9`,
        display: `minimal-ui`,
        icon: `src/images/coffee-cup-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `starbucks`,
      },
    },
  ],
}
