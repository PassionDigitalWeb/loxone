import React from "react"
import { Prose } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"
import { graphql } from "gatsby"

export const IntroSlice = ({ slice }) => {
  const { primary } = slice
  const { title, content } = primary

  return (
    <SplitIntro title={<PRichText field={title.richText} />}>
      <Prose>
        <PRichText field={content.richText} />
      </Prose>
    </SplitIntro>
  )
}

export const query = graphql`
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

  fragment PageDataBodyIntroductionContent on PrismicPageDataBodyIntroductionContent {
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
`

export default IntroSlice
