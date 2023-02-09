import React from "react"
import { Button, ButtonGroup, Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { ContentBlock } from "@components/molecules"
import { graphql } from "gatsby"
import { PrismicLink } from "@prismicio/react"

export const ContentBlockSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, has_background, align } = primary

  return (
    <ContentBlock hasBG={has_background}>
      <Prose align={align || "center"}>
        {content && <PRichText field={content.richText} />}
        {items?.length > 0 && (
          <Spacer y="sm">
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
          </Spacer>
        )}
      </Prose>
    </ContentBlock>
  )
}

export const query = graphql`
  fragment HomepageDataBodyContentBlock on PrismicHomepageDataBodyContentBlock {
    ...SliceType
    items {
      button_link {
        url
        target
        link_type
      }
      colour
      button_text
    }
    primary {
      content {
        richText
      }
      has_background
      align
    }
  }

  fragment PageDataBodyContentBlock on PrismicPageDataBodyContentBlock {
    ...SliceType
    items {
      button_link {
        url
        target
        link_type
      }
      colour
      button_text
    }
    primary {
      content {
        richText
      }
      has_background
      align
    }
  }
`

export default ContentBlockSlice
