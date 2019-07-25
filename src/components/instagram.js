import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  const images = data.allInstaNode.edges.map(edge => (
    <Img
      style={{
        height: '150px',
        width: '150px',
      }}
      fluid={edge.node.localFile.childImageSharp.fixed}
    />
  ))

  console.log(images)

  // return null
  return images.map(image => <div>{image}</div>)
}

export default Instagram
