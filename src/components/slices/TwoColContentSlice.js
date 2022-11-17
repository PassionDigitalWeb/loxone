import React from "react"
import { Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import TwoColContent from "@components/molecules/two-column-content"
import { graphql } from "gatsby"

export const TwoColContentSlice = ({ slice }) => {
  const { items } = slice

  return (
    <TwoColContent>
      {items?.map(({ content }, key) => {
        return (
          <TwoColContent.Col key={key}>
            <Prose>
              <PRichText field={content.richText} />
            </Prose>
          </TwoColContent.Col>
        )
      })}
    </TwoColContent>
  )
}

export const query = graphql`
  fragment HomepageDataBodyTwoColumnContent on PrismicHomepageDataBodyTwoColumnContent {
    ...SliceType
    items {
      content {
        richText
      }
    }
  }

  fragment PageDataBodyTwoColumnContent on PrismicPageDataBodyTwoColumnContent {
    ...SliceType
    items {
      content {
        richText
      }
    }
  }
`

export default TwoColContentSlice
