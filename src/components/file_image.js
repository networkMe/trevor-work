import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({src, alt, className}) => {
    const data = useStaticQuery(graphql`
      query AllImages {
        allFile(filter: {ext: {in: [".png", ".jpg"]}}) {
          nodes {
            name
            relativePath
            childImageSharp {
              id
              gatsbyImageData
            }
          }
        }
      }
    `)

    let image;
    data.allFile.nodes.forEach(element => {
      if (element.relativePath.includes(src))
        image = getImage(element);
    })
  
    if (!image) {
      return <p className={className}>Image not found</p>
    }
  
    return <GatsbyImage image={image} alt={alt} className={className} />
  }
  
  export default Image