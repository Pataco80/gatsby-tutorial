import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
query MySiteQuery{
  site {
    info:siteMetadata {
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
const Header = () => {
  const data = useStaticQuery(getData)
  const { title, identity: { name }, author } = data.site.info
  return (
    <div>
      <h1>{title}</h1>
      <p>{name}</p>
      <p>{author}</p>
    </div>
  )
}

export default Header
