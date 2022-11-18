import * as React from "react"

import { graphql } from "gatsby"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import { PageTemplate } from "../templates/page"

const IndexPage = props => {
  return <PageTemplate {...props} />
}

export const query = graphql`
  {
    page: prismicHomepage {
      _previewable
      data {
        meta_description
        meta_title
        body {
          ...HomepageDataBodyFullHero
          ...HomepageDataBodyIntroductionContent
          ...HomepageDataBodyFeature
          ...HomepageDataBodyBanner
          ...HomepageDataBodyShowroom
          ...HomepageDataBodyContentBlock
          ...HomepageDataBodySpacer
          ...HomepageDataBodyTwoColumnContent
          ...HomepageDataBodyImageBlock
          ...HomepageDataBodyVideoBlock
          ...HomepageDataBodyFAQs
          ...HomepageDataBodyFeatureSlider
          ...HomepageDataBodyGallery
          ...HomepageDataBodyContactForm
        }
      }
    }
  }
`

export default withPrismicPreview(IndexPage)
