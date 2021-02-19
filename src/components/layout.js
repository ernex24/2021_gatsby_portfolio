/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          width: `100vw`,
          height: `100vh`,
          margin: `0 auto`,
          padding: `8rem 0 0 0`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            textAlign: `center`,
            margin: `2rem 0`,
            position: `absolute`,
            bottom: 0,
            width: `100%`
          }}
        >
          © {new Date().getFullYear()}, Ernesto Pérez all rigths reserved
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
