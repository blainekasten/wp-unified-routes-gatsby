/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = node => {
  // This is not the real API, but let's assume it's this simple
  if (node.type === `post` && node.length === 1) {
    node.setComponent(require.resolve("templates/single-post"))
  }
}
