import React from "react"
import * as styles from "./feature.module.scss"
import { Container, Heading } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"

export const Feature = ({
  bgImageUrl,
  bgImage,
  isImageRight = false,
  children,
  ...props
}) => {
  return (
    <div className={classNames(styles.feature)} {...props}>
      <Spacer y="lg">
        <Container size="md">
          <div
            className={classNames(
              styles.featureGrid,
              isImageRight && styles.isRight
            )}
          >
            {children}
          </div>
        </Container>
      </Spacer>
    </div>
  )
}

Feature.Asset = ({ children }) => {
  return <div className={styles.asset}>{children}</div>
}

Feature.Content = ({ children }) => {
  return (
    <div className={styles.content}>
      <Spacer y="sm">{children}</Spacer>
    </div>
  )
}

Feature.propTypes = {}

export default Feature
