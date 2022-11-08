import * as React from "react"

import { SliceZone } from "@prismicio/react"
import { graphql } from "gatsby"
import { SEO } from "@components/utils/SEO"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import {
  BannerSlice,
  ContentBlockSlice,
  FeatureSlice,
  FullHeroSlice,
  IntroSlice,
  ShowroomSlice,
  SpacerSlice,
} from "@components/slices"

const components = {
  full_hero: FullHeroSlice,
  spacer: SpacerSlice,
  introduction_content: IntroSlice,
  showroom: ShowroomSlice,
  feature: FeatureSlice,
  banner: BannerSlice,
  content_block: ContentBlockSlice,
}

const IndexPage = props => {
  const document = props.data.prismicHomepage
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
  const document = props.data.prismicHomepage.data
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
    prismicHomepage {
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
        }
      }
    }
  }
`

export default withPrismicPreview(IndexPage)
