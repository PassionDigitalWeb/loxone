import React from "react"
import Banner from "@components/molecules/banner"
import { Button, ButtonGroup, Heading, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"
import { graphql } from "gatsby"
import Spacer from "@components/atoms/spacer"

export const BannerSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, title } = primary
  return (
    <Spacer type="margin" y="md">
      <Banner>
        <Prose align="center">
          {title && (
            <Heading
              node="h3"
              variant="h3"
              weight="300"
              dangerouslySetInnerHTML={{ __html: title.html }}
            ></Heading>
          )}
          {content && <PRichText field={content.richText} />}
          {items && (
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
          )}
        </Prose>
      </Banner>
    </Spacer>
  )
}

export const query = graphql`
  fragment HomepageDataBodyBanner on PrismicHomepageDataBodyBanner {
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
      title {
        html
      }
      content {
        richText
      }
    }
  }
  fragment PageDataBodyBanner on PrismicPageDataBodyBanner {
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
      title {
        html
      }
      content {
        richText
      }
    }
  }
`

export default BannerSlice
