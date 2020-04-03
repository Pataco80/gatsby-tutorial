import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styles from "../css/product.module.css"
import Img from "gatsby-image"
const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <Layout>
      <h1>Products page</h1>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Img fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title}
                <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>More details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        price
        info {
          info
        }
      }
    }
  }
`

export default products
