import { graphql } from "gatsby"

export const SliceType = graphql`
  fragment SliceType on PrismicSliceType {
    slice_type
    slice_label
    id
  }
`

export const HomeFragments = graphql`
  fragment HomepageDataBodyFullHero on PrismicHomepageDataBodyFullHero {
    ...SliceType
    primary {
      hero_content {
        richText
      }
      hero_title {
        richText
      }
      hero_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
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
  fragment HomepageDataBodyIntroductionContent on PrismicHomepageDataBodyIntroductionContent {
    ...SliceType
    primary {
      title {
        richText
      }
      content {
        richText
      }
    }
  }
  fragment HomepageDataBodyFeature on PrismicHomepageDataBodyFeature {
    ...SliceType
    primary {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
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
  fragment HomepageDataBodyShowroom on PrismicHomepageDataBodyShowroom {
    ...SliceType
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
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                  alt
                }
              }
            }
          }
        }
      }
    }
  }
  fragment HomepageDataBodyContentBlock on PrismicHomepageDataBodyContentBlock {
    ...SliceType
    primary {
      content {
        richText
      }
      has_background
    }
  }
  fragment HomepageDataBodySpacer on PrismicHomepageDataBodySpacer {
    ...SliceType
    primary {
      x_axis
      y_axis
    }
  }
  fragment HomepageDataBodyTwoColumnContent on PrismicHomepageDataBodyTwoColumnContent {
    ...SliceType
    items {
      content {
        richText
      }
    }
  }
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

  fragment HomepageDataBodyVideoBlock on PrismicHomepageDataBodyVideoBlock {
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
      video_embed {
        title
        html
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
  fragment HomepageDataBodyFAQs on PrismicHomepageDataBodyFaqs {
    ...SliceType
    primary {
      content {
        richText
      }
    }
    items {
      question
      answer {
        richText
      }
    }
  }
`
