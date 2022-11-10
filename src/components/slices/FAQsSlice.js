import React from "react"
import { Button, ButtonGroup, Heading, Prose, Text } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { ContentBlock, FAQs, ImageBlock } from "@components/molecules"
import { PrismicLink } from "@prismicio/react"

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

export default FAQsSlice
