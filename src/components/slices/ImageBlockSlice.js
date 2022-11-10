import React from "react"
import { Button, ButtonGroup, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { ContentBlock, ImageBlock } from "@components/molecules"
import { PrismicLink } from "@prismicio/react"

export const ImageBlockSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, image } = primary

  if (!image) {
    return <></>
  }

  return (
    <ImageBlock>
      {content && (
        <ImageBlock.Content>
          <Prose align="center">
            {content && <PRichText field={content.richText} />}
          </Prose>
        </ImageBlock.Content>
      )}

      <ImageBlock.Image image={image} />

      {items && (
        <ImageBlock.Content>
          <Prose align="center">
            <ButtonGroup>
              {items?.map(({ button_text, button_link, colour }, key) => {
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
          </Prose>
        </ImageBlock.Content>
      )}
    </ImageBlock>
  )
}

export default ImageBlockSlice
