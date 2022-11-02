import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./hero.module.scss"
import { Container, Prose } from "@components/atoms"
import { GatsbyImage } from "gatsby-plugin-image"
import Spacer from "@components/atoms/spacer"

export const Hero = ({ bgImageUrl, gatsbyImageData, children, ...props }) => {
  return (
    <div className={cn(styles.hero)}>
      {(bgImageUrl || gatsbyImageData) && (
        <div className={styles.bgImage}>
          {gatsbyImageData && <GatsbyImage alt="" image={gatsbyImageData} />}
          {bgImageUrl && (
            <img className={styles.bgImageImg} src={bgImageUrl} alt="" />
          )}
        </div>
      )}
      <div className={styles.heroContent}>
        <Spacer y="lg">
          <Container size="lg">{children}</Container>
        </Spacer>
      </div>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
