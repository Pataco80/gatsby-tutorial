const path = require(`path`)

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/product-template.js`)
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  // Permet de contrôler le passage des données provenant de la requette pour les slugs à décommanter pour le contrôle
  /*
  console.log("###########")
  console.log(JSON.stringify(result))
  console.log("###########")
*/

  // Ci dessous création des pages avec le résultat de la constante "result"
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: productTemplate,
      context: {
        slug: product.slug,
      },
    })
  })
}
