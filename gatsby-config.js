/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Gatsby tutorial",
    description: "is my gatsby tutorial from multiples tests and learning fron the Udemy",
    author: "@Pataco80",
    cats: ['Fiona', 'Horatio'],
    identity: {
      name: "Ricardo",
      age: 40
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3o2914b2zflq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `QLFZu_7Nb1SDNe6ceXZsbCxIFC5ekjnvOJL1VVuTZvU`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`
  ],
}
