import React from "react"
import * as styles from "./styles.module.scss"
import classNames from "classnames"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

export const GridCard = ({ cardImage, children, ...props }) => {
  const image = getImage(cardImage.localFile)

  // Use like this:
  const bgImage = image && convertToBgImage(image)
  return (
    <BackgroundImage
      className={classNames(styles.card)}
      {...props}
      {...bgImage}>
      <div className={styles.overlay}></div>
      <div className={styles.bgShape}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 630 356"
          preserveAspectRatio="none"
          fill="none">
          <path d="M0 0L630 356H0V0Z" fill="black" fillOpacity="0.3" />
        </svg>
      </div>
      <div className={styles.content}>{children}</div>
    </BackgroundImage>
  )
}

export const GridCards = ({ children }) => {
  return <div className={classNames(styles.cards)}>{children}</div>
}
