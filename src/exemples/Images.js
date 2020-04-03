import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import singleImage from '../images/beach.jpg'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "boat.jpg"}) {
    childImageSharp {
      fixed(width: 400, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "ocean.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

const Images = () => {
  const imagesData = useStaticQuery(getImages)
  console.log(imagesData)
  return (
    <section className="images-container">
      <div className="single-image">
        <h3>Basic Image</h3>
        <img src={singleImage} alt="each" width="100%"
          height="auto" />
      </div>
      <div className="single-image">
        <h3>Fixed Image / Blur</h3>
        <Img fixed={imagesData.fixed.childImageSharp.fixed} />
      </div><div className="single-image">
        <h3>Fluid Image / SVG</h3>
        <Img fluid={imagesData.fluid.childImageSharp.fluid} />
        <div className="small">
          <Img fluid={imagesData.fluid.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  )
}

export default Images
