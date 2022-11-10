import React from "react"
import * as styles from "./feature.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import classNames from "classnames"

export const Feature = ({ isImageRight = false, children, ...props }) => {
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

const Asset = ({ children }) => {
  return <div className={styles.asset}>{children}</div>
}

const Content = ({ children }) => {
  return (
    <div className={styles.content}>
      <Spacer y="sm">{children}</Spacer>
    </div>
  )
}

Feature.Asset = Asset
Feature.Content = Content

export default Feature
