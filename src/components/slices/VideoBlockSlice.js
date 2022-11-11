import React from "react"
import { Button, ButtonGroup, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { ContentBlock, MediaBlock } from "@components/molecules"
import { PrismicLink } from "@prismicio/react"

export const VideoBlockSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, image, video_embed } = primary

  console.log({ primary })

  return (
    <MediaBlock>
      {content && (
        <MediaBlock.Content>
          <Prose align="center">
            {content && <PRichText field={content.richText} />}
          </Prose>
        </MediaBlock.Content>
      )}

      <MediaBlock.Video image={image} videoEmbed={video_embed} />

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

export default VideoBlockSlice
