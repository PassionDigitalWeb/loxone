import * as React from "react"

import { SliceZone } from "@prismicio/react"
import { graphql } from "gatsby"
import { SEO } from "@components/utils/SEO"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import {
  BannerSlice,
  ContentBlockSlice,
  FAQsSlice,
  FeatureSlice,
  FullHeroSlice,
  ImageBlockSlice,
  IntroSlice,
  ShowroomSlice,
  SpacerSlice,
  TwoColContentSlice,
  VideoBlockSlice,
} from "@components/slices"

const components = {
  full_hero: FullHeroSlice,
  spacer: SpacerSlice,
  introduction_content: IntroSlice,
  showroom: ShowroomSlice,
  feature: FeatureSlice,
  banner: BannerSlice,
  content_block: ContentBlockSlice,
  two_column_content: TwoColContentSlice,
  image_block: ImageBlockSlice,
  faqs: FAQsSlice,
  video_block: VideoBlockSlice,
}

const IndexPage = props => {
  const document = props.data.page
  return (
    <>
      <SliceZone slices={document.data.body} components={components} />
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = props => {
  const document = props.data.page.data
  const { meta_description, meta_title } = document
  return (
    <SEO
      title={meta_title}
      description={meta_description}
      pathname={props.pathname}
    />
  )
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
        }
      }
    }
  }
`

export default withPrismicPreview(IndexPage)
