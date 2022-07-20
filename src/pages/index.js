import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BackgroundSlider from 'gatsby-image-background-slider'
import { useStaticQuery } from "gatsby"
import Icon from "../assets/logo-svg.svg";

const IndexPage = () => (

  <Layout>
    <div className="flex flex-col items-end h-auto">
      <div className="bg-black inset-0 z-0  px-4">
      </div>

      <BackgroundSlider
        query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 1920, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
        initDelay={2}
        transition={4}
        duration={8}
        style={{
          transform: "rotate(0deg) scale(1)",
        }}

      />
      <div className="flex m-16 justify-end">
        <div className="w-1/2  bg-transparent p-5  rounded">
          <div className="grid items-center">
            <Icon />
            <h3 className="pt-1 mb-2 text-2xl text-center font-paci text-blue-100">Icaro in Rio - June 2022</h3>
            <p className="mb-4 text-sm text-gray-7
            00  text-center">
              Flight Docs has registered the short trip Icaro Paragliders promoted in Rio last June 2022.
            </p>
            <hr className="mb-6 border-t" />
            <div className="mb-6 text-center">
              <Link to="/photos">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Photos
                </button>
              </Link>
            </div>

          </div>
          <div className="mb-6 text-center">
            <Link to="/videos">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Videos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

