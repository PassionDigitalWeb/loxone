import React from "react"
import { Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { FAQs } from "@components/molecules"
import { graphql } from "gatsby"

export const FAQsSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content } = primary

  return (
    <FAQs>
      {content && (
        <Prose align="center">
          <PRichText field={content.richText} />
        </Prose>
      )}
      {items?.map(({ question, answer }, key) => {
        return (
          <FAQs.FAQ question={question} key={key}>
            <PRichText field={answer.richText} />
          </FAQs.FAQ>
        )
      })}
    </FAQs>
  )
}

export const query = graphql`
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
  fragment PageDataBodyFAQs on PrismicPageDataBodyFaqs {
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

export default FAQsSlice
