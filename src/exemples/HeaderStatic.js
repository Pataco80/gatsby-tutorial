import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => {
      const { identity: { age }, cats } = data.site.info
      return (
        <div>
          <p>Je suis le rendu du Staticquery</p>
          <p>{data.site.info.description}</p>
          <p>{age}</p>
          <p>{cats[0]}</p>
          <p>{cats[1]}</p>
        </div>
      )
    }
    }
  ></StaticQuery>
)

export default HeaderStatic
