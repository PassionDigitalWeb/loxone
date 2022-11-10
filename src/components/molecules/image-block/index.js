import React from "react"
import * as styles from "./image-block.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

export const ImageBlock = ({ children, ...props }) => {
  return (
    <div className={classNames(styles.imageBlock)} {...props}>
      <Container size="lg">
        <Spacer y={"md"}>
          <Container size="md">{children}</Container>
        </Spacer>
      </Container>
    </div>
  )
}

const Content = ({ children, ...props }) => {
  return <div className={classNames(styles.content)}>{children}</div>
}

const Image = ({ imageUrl, image, ...props }) => {
  return (
    <>
      {(imageUrl || image) && (
        <>
          <Spacer y="sm" />
          <div className={styles.image}>
            {image && (
              <GatsbyImage alt={image.alt} image={getImage(image.localFile)} />
            )}
            {imageUrl && (
              <img className={styles.imageImg} src={imageUrl} alt="" />
            )}
          </div>
          <Spacer y="sm" />
        </>
      )}
    </>
  )
}

Image.propTypes = {
  imageUrl: PropTypes.string,
  image: PropTypes.object,
}

ImageBlock.Content = Content
ImageBlock.Image = Image

export default ImageBlock
