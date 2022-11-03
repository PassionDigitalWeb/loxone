import React from "react"
import * as styles from "./banner.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"
import PropTypes from "prop-types"

export const Banner = ({ isMini, children, ...props }) => {
  return (
    <div
      className={classNames(styles.banner, isMini && styles.mini)}
      {...props}
    >
      <Container size="lg" style={{ position: "relative" }}>
        <div className={styles.bannerBg}>
          {isMini ? (
            <StaticImage
              src="./banner-bg-mini.jpg"
              alt=""
              objectFit="cover"
              objectPosition="center"
              width="513"
              height="223"
            />
          ) : (
            <StaticImage
              src="./banner-bg.jpg"
              alt=""
              objectFit="cover"
              objectPosition="center"
              width="1290"
              height="359"
            />
          )}
        </div>
        <Spacer y={isMini ? "md" : "xl"}>
          <Container size="md">
            <div className={classNames(styles.bannerInner)}>{children}</div>
          </Container>
        </Spacer>
      </Container>
    </div>
  )
}

Banner.propTypes = {
  isMini: PropTypes.bool,
}

export default Banner
