import React, { Suspense } from "react"
import Loader from "@components/atoms/loader"
import { graphql } from "gatsby"

const Showroom = React.lazy(() => import("./lazy/showroom"))

export const ShowroomSlice = ({ slice }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Showroom slice={slice} />
    </Suspense>
  )
}

export const query = graphql`
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

  fragment PageDataBodyShowroom on PrismicPageDataBodyShowroom {
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
`

export default ShowroomSlice
