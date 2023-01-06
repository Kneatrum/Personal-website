/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `notes`,
      path: `${__dirname}/src/pages/`,
    },
  },],
  siteMetadata: {
    title: 'Kneatrum',
    description: 'Hardware Dev Portfolio',
    copyright: 'This website is copyright 2023 Knreatrum'
  }
}
