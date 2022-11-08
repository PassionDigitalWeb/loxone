/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "../styles/layout.scss"
import Footer from "@components/organisms/footer"
import { Header } from "@components/organisms"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Header isLight />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
