import React from "react"
import { Feature } from "@components/molecules"
import Img from "../../../storybook/assets/img_1.png"
import { Button, ButtonGroup, Heading, Prose, Text } from "@components/atoms"
import { GatsbyImage } from "gatsby-plugin-image"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"

const FeatureSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, image, is_image_right } = primary

  return (
    <Feature isImageRight={is_image_right}>
      {image && (
        <Feature.Asset>
          <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
        </Feature.Asset>
      )}
      <Feature.Content>
        <Prose>
          {content && <PRichText field={content.richText} />}
          {items && (
            <ButtonGroup>
              {items?.map(({ button_text, button_link, colour }, key) => {
                console.log({ colour })
                return (
                  <PrismicLink
                    key={key}
                    field={button_link}
                    internalComponent={props => (
                      <Button color={colour} {...props} />
                    )}
                    externalComponent={props => (
                      <Button color={colour} {...props} />
                    )}
                  >
                    {button_text}
                  </PrismicLink>
                )
              })}
            </ButtonGroup>
          )}
        </Prose>
      </Feature.Content>
    </Feature>
  )
}

export default FeatureSlice
