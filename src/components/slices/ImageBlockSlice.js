import React from "react"
import { Button, ButtonGroup, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { ContentBlock, MediaBlock } from "@components/molecules"
import { PrismicLink } from "@prismicio/react"

export const ImageBlockSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, image } = primary

  if (!image) {
    return <></>
  }

  return (
    <MediaBlock>
      {content && (
        <MediaBlock.Content>
          <Prose align="center">
            {content && <PRichText field={content.richText} />}
          </Prose>
        </MediaBlock.Content>
      )}

      <MediaBlock.Image image={image} />

      {items && (
        <MediaBlock.Content>
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
        </MediaBlock.Content>
      )}
    </MediaBlock>
  )
}

export default ImageBlockSlice
