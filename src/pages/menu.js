import React from "react"
import { graphql } from "gatsby"

const MenuPage = ({ data }) => {
  const menuItems = data.allMarkdownRemark.edges;

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <ul>
        {menuItems.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
            <p>Price: ${node.frontmatter.price}</p>
            <img src={node.frontmatter.image} alt={node.frontmatter.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            description
            price
            image
          }
        }
      }
    }
  }
`

export default MenuPage;
