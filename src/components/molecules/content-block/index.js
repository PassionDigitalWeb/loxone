import React from "react"
import * as styles from "./content-block.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"
import PropTypes from "prop-types"

export const ContentBlock = ({ isMini, hasBG, children, ...props }) => {
  return (
    <div className={classNames(styles.contentBlock)} {...props}>
      <Container size="lg" style={{ position: "relative" }}>
        {hasBG && (
          <div className={styles.bg}>
            <StaticImage
              src="./simple-block-bg.jpg"
              alt=""
              objectFit="cover"
              objectPosition="center"
              width="1290"
              height="359"
            />
          </div>
        )}
        <Spacer y={isMini ? "md" : "xl"}>
          <Container size="md">
            <div className={classNames(styles.inner)}>{children}</div>
          </Container>
        </Spacer>
      </Container>
    </div>
  )
}

ContentBlock.propTypes = {
  isMini: PropTypes.bool,
}

export default ContentBlock