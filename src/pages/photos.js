import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

/*
  1. write query 
  2. pass data into img component
*/

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 180) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query { 
      allFile (limit: 30, filter: {sourceInstanceName: {eq: "backgrounds"}}){
        edges {
            node {
              relativePath
              childImageSharp {
                fluid (maxWidth: 1920, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
      }
          }
      # allFile(
      #   filter: {
      #     extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      #     absolutePath: { regex: "/(jpeg)/" }
      #   }
      # ) {
      #   totalCount
      #   edges {
      #     node {
      #       name
      #       ...squareImage
      #       # childImageSharp {
      #       #   fluid(maxWidth: 915, quality: 70) {
      #       #     aspectRatio
      #       #     ...GatsbyImageSharpFluid_withWebp
      #       #   }
      #       # }
      #     }
      #   }
      # }
      file( 
       
        relativePath: { eq: "about.jpg" }) {
        ...squareImage
        # childImageSharp {
        #   fluid {
        #     base64
        #     aspectRatio
        #     src
        #     srcSet
        #     sizes
        #   }
        # }
      }
    }
  `)
  const pics = data.allFile.edges
  return (
    <Layout>
      <div className="grid grid-flow-col grid-rows-4 grid-cols-3 gap-8 p-8 ">
        {pics.map(image => (
          <div key={image.node.childImageSharp.fluid.src}>
            <Img
              key={image.node.childImageSharp.fluid.src}
              fluid={image.node.childImageSharp.fluid}
              style={{ 'borderRadius': '1rem' }}
            />
          </div>
        ))}

        <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="https://drive.google.com/file/d/13cqnfFM44reXQ9ShDfTQsqwMLilhy5NT/view?usp=sharing">
          {/* https://drive.google.com/uc?export=download&id=13cqnfFM44reXQ9ShDfTQsqwMLilhy5NT */}

          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Download Photos
          </button></a>
        {/* <Img fluid={data.file.childImageSharp.fluid} alt="about" /> */}
      </div>
    </Layout>
  )
}
