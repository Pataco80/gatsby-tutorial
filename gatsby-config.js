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
  plugins: [`gatsby-plugin-styled-components`],
}
