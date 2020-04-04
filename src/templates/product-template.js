import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "../css/singleProduct.module.css"
const ProductTemplate = ({ data }) => {
  const {
    title,
    price,
    image: { fixed },
    info: { info },
  } = data.product
  console.log(data)
  return (
    <Layout>
      <section className={styles.page}>
        <Link className={styles.linkBack} to="/products">
          Back to Products
        </Link>
        <div>
          <h1>Single Product : {title}</h1>
        </div>
        <article>
          <div>
            <Img fixed={fixed} alt={title} />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{info}</p>
            <button>Add to Cart</button>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetProduct($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      slug
      image {
        fixed(width: 350, height: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ProductTemplate
