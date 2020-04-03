import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../exemples/Header'
import HeaderStatic from '../exemples/HeaderStatic'

const exemples = ({ data }) => {
  console.log(data)
  const { title, identity: { name, age } } = data.site.info
  return (
    <Layout>
      <h1>Je suis un exemple</h1>
      <Header />
      <HeaderStatic />
      <div>
        <p>My page query</p>
        <p>{title}</p>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query MyPageQuery{
    site {
      info: siteMetadata {
        title
        description
        author
        identity {
          name
          age
        }
        cats
      }
    }
  }
`

export default exemples
