import * as React from "react"

import { SliceZone } from "@prismicio/react"
import FullHeroSlice from "@components/slices/FullHeroSlice"
import { graphql } from "gatsby"
import { SEO } from "@components/utils/SEO"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import IntroSlice from "@components/slices/IntroSlice"
import ShowroomSlice from "@components/slices/ShowroomSlice"
import FeatureSlice from "@components/slices/FeatureSlice"
import BannerSlice from "@components/slices/BannerSlice"
import ContentBlockSlice from "@components/slices/ContentBlockSlice"

const components = {
  full_hero: FullHeroSlice,
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
          ... on PrismicHomepageDataBodyFullHero {
            id
            slice_type
            slice_label
            primary {
              hero_content {
                richText
              }
              hero_title {
                richText
              }
              hero_image {
                gatsbyImageData(layout: FULL_WIDTH)
                alt
              }
            }
            items {
              button_text
              button_link {
                url
                link_type
                type
              }
            }
          }
          ... on PrismicHomepageDataBodyIntroductionContent {
            id
            slice_type
            slice_label
            primary {
              title {
                richText
              }
              content {
                richText
              }
            }
          }
          ... on PrismicHomepageDataBodyFeature {
            id
            slice_type
            slice_label
            primary {
              image {
                gatsbyImageData
              }
              content {
                richText
              }
              is_image_right
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
          ... on PrismicHomepageDataBodyBanner {
            id
            slice_type
            slice_label
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
          ... on PrismicHomepageDataBodyShowroom {
            id
            slice_type
            slice_label
            primary {
              title {
                richText
              }
            }
            items {
              showroom {
                document {
                  ... on PrismicShowroom {
                    id
                    data {
                      title {
                        text
                      }
                      showroom_image {
                        alt
                        copyright
                        url
                        gatsbyImageData(layout: FULL_WIDTH)
                      }
                      interests {
                        y_axis_percent
                        x_axis_percent
                        is_popup_right
                        interest_title {
                          richText
                        }
                        interest_content {
                          richText
                        }
                        interest_image {
                          gatsbyImageData(layout: FULL_WIDTH)
                          alt
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepageDataBodyContentBlock {
            id
            slice_type
            slice_label
            primary {
              content {
                richText
              }
              has_background
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(IndexPage)
