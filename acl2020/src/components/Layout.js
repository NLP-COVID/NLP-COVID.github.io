import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../styles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({ footerData = null, navbarData = null, site = null, children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta name="keywords" content="workshop nlp natural language processing COVID-19 covid-19 2020 acl2020 openreview text mining" />
    </Helmet>
    <Navbar data={navbarData} />
    <main>{children}</main>
    <Footer data={footerData} site={site} />
  </div>
);

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
              taglines
              orgLink
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
              longLabel
            }
          }
        }
      }
    }
    site {      
      siteMetadata {       
        sponsors {
          name
          longName
          level
          link
          image
        }
      }    
    }
  }
`;

export default TemplateWrapper;
