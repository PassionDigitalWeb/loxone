import * as React from "react"
import { graphql } from "gatsby"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import { PageTemplate } from "../templates/page"

const Page = props => {
  return <PageTemplate {...props} />
}

export const query = graphql`
  query PageTemplate($id: String) {
    page: prismicPage(id: { eq: $id }) {
      _previewable
      data {
        meta_description
        meta_title
        body {
          ...PageDataBodyFullHero
          ...PageDataBodyIntroductionContent
          ...PageDataBodyFeature
          ...PageDataBodyBanner
          ...PageDataBodyShowroom
          ...PageDataBodyContentBlock
          ...PageDataBodySpacer
          ...PageDataBodyTwoColumnContent
          ...PageDataBodyImageBlock
          ...PageDataBodyVideoBlock
          ...PageDataBodyFAQs
          ...PageDataBodyFeatureSlider
        }
      }
    }
  }
`

export default withPrismicPreview(Page)
