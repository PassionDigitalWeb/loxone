import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./hero.module.scss"
import { Container, Prose } from "@components/atoms"
import { GatsbyImage } from "gatsby-plugin-image"
import Spacer from "@components/atoms/spacer"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

export const Hero = ({ bgImageUrl, bgImage, children, ...props }) => {
  const bgImageConvert = bgImage && convertToBgImage(bgImage.gatsbyImageData)
  return (
    <div className={cn(styles.hero)}>
      {(bgImageUrl || bgImage) && (
        <div className={styles.bgImage}>
          {bgImage && <BackgroundImage alt={bgImage.alt} {...bgImageConvert} />}
          {bgImageUrl && (
            <img className={styles.bgImageImg} src={bgImageUrl} alt="" />
          )}
        </div>
      )}
      <Container size="lg" className={styles.heroContent}>
        <Spacer y="lg">{children}</Spacer>
      </Container>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
