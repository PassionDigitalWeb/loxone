import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Cards, Card } from "@components/molecules/cards"
import {
  Button,
  ButtonGroup,
  Container,
  Prose,
  Spacer,
} from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"

export const CardsSlice = ({ slice }) => {
  const { primary, items } = slice
  const {
    section_title,
    button_text_1,
    button_link_1,
    button_text_2,
    button_link_2,
  } = primary

  const buttons = []

  button_text_1 &&
    buttons.push({
      button_text: button_text_1,
      button_link: button_link_1,
    })

  button_text_2 &&
    buttons.push({
      button_text: button_text_2,
      button_link: button_link_2,
    })

  return (
    <Container>
      <Spacer y="lg">
        {section_title && (
          <div style={{ textAlign: "center" }}>
            <PRichText field={section_title.richText} />
          </div>
        )}

        {items && (
          <>
            <Spacer y="md">
              <Cards>
                {items.map(({ card_content, card_image }) => {
                  return (
                    <Card>
                      {card_image && (
                        <Card.Asset>
                          <GatsbyImage
                            alt={card_image.alt}
                            image={getImage(card_image.localFile)}
                          />
                        </Card.Asset>
                      )}
                      <Card.Content>
                        <Prose>
                          {card_content && (
                            <PRichText field={card_content.richText} />
                          )}
                        </Prose>
                      </Card.Content>
                    </Card>
                  )
                })}
              </Cards>
            </Spacer>
          </>
        )}

        <Prose align="center">
          <ButtonGroup>
            {buttons?.map(({ button_text, button_link }, key) => {
              const color = key === 0 ? "green" : "dark-grey"
              return (
                <PrismicLink
                  key={key}
                  field={button_link}
                  internalComponent={props => (
                    <Button color={color} {...props} />
                  )}
                  externalComponent={props => (
                    <Button color={color} {...props} />
                  )}
                >
                  {button_text}
                </PrismicLink>
              )
            })}
          </ButtonGroup>
        </Prose>
      </Spacer>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageDataBodyCards on PrismicHomepageDataBodyCards {
    ...SliceType
    primary {
      section_title {
        richText
      }
      button_link_1 {
        url
        target
        link_type
      }
      button_text_1
      button_link_2 {
        url
        target
        link_type
      }
      button_text_2
    }
    items {
      card_image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      card_content {
        richText
      }
    }
  }

  fragment PageDataBodyCards on PrismicPageDataBodyCards {
    ...SliceType
    primary {
      section_title {
        richText
      }
      button_link_1 {
        url
        target
        link_type
      }
      button_text_1
      button_link_2 {
        url
        target
        link_type
      }
      button_text_2
    }
    items {
      card_image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      card_content {
        richText
      }
    }
  }
`

export default CardsSlice
