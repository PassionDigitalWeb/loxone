import React from "react"

import { Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { graphql } from "gatsby"
import Gallery from "@components/molecules/gallery"

export const GallerySlice = ({ slice }) => {
  const { primary, items } = slice
  const { content } = primary

  return (
    <Gallery>
      <Gallery.Content>
        <Prose>{content && <PRichText field={content.richText} />}</Prose>
      </Gallery.Content>
      {items && <Gallery.Slider slides={items} />}
    </Gallery>
  )
}

export const query = graphql`
  fragment HomepageDataBodyGallery on PrismicHomepageDataBodyGallery {
    ...SliceType
    primary {
      content {
        richText
      }
    }
    items {
      image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 650
              height: 415
            )
          }
        }
      }
      title
      caption {
        richText
      }
    }
  }

  fragment PageDataBodyGallery on PrismicPageDataBodyGallery {
    ...SliceType
    primary {
      content {
        richText
      }
    }
    items {
      image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 650
              height: 415
            )
          }
        }
      }
      title
      caption {
        richText
      }
    }
  }
`

export default GallerySlice
