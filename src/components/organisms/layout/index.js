/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "@styles/layout.scss"
import * as styles from "./styles.module.scss"
import Footer from "@components/organisms/footer"
import { Header } from "@components/organisms"
import { useEffect, useState } from "react"
import { SEO } from "@components/utils/SEO"
import { Helmet } from "react-helmet"

const Layout = ({ children, ...props }) => {
  const checkHasHero = () =>
    props?.data?.page?.data?.body?.[0].slice_type === "full_hero"

  const [hasHero, setHasHero] = useState(checkHasHero())
  useEffect(() => {
    const hero = checkHasHero()
    setHasHero(hero)
  }, [props?.data?.page])

  return (
    <>
      <Head {...props} />
      <div style={{ position: "relative" }}>
        <Header hasHero={hasHero} />
        <main className={!hasHero && styles.noHero}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

const Head = props => {
  const document = props?.data?.page?.data

  if (!document) {
    return <></>
  }
  const { meta_description, meta_title } = document

  return (
    <>
      <Helmet>
        <SEO
          title={meta_title}
          description={meta_description}
          pathname={props.pathname}
        />
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
