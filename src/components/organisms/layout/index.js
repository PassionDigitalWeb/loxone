/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "@styles/layout.scss"
import * as styles from "./layout.module.scss"
import Footer from "@components/organisms/footer"
import { Header } from "@components/organisms"
import { useEffect, useState } from "react"

const Index = ({ children, ...props }) => {
  const checkHasHero = () =>
    props?.data?.page?.data?.body?.[0].slice_type === "full_hero"

  const [hasHero, setHasHero] = useState(checkHasHero())
  useEffect(() => {
    const hero = checkHasHero()
    setHasHero(hero)
  }, [props.data.page])

  console.log({ props })

  return (
    <>
      <div style={{ position: "relative" }}>
        <Header hasHero={hasHero} />
        <main className={!hasHero && styles.noHero}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
