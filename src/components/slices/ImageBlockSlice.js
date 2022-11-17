import React from "react"
import { Button, ButtonGroup, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { MediaBlock } from "@components/molecules"
import { PrismicLink } from "@prismicio/react"
import { graphql } from "gatsby"

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

export const query = graphql`
  fragment HomepageDataBodyImageBlock on PrismicHomepageDataBodyImageBlock {
    ...SliceType
    primary {
      content {
        richText
      }
      image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    items {
      button_link {
        url
        target
        link_type
      }
      colour
      button_text
    }
  }

  fragment PageDataBodyImageBlock on PrismicPageDataBodyImageBlock {
    ...SliceType
    primary {
      content {
        richText
      }
      image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    items {
      button_link {
        url
        target
        link_type
      }
      colour
      button_text
    }
  }
`

export default ImageBlockSlice
