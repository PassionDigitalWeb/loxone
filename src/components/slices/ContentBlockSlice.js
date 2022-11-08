import React from "react"
import Banner from "@components/molecules/banner"
import { Button, ButtonGroup, Heading, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"
import { ContentBlock } from "@components/molecules"

const ContentBlockSlice = ({ slice }) => {
  const { primary } = slice
  const { content, has_background } = primary
  return (
    <ContentBlock hasBG={has_background}>
      <Prose align="center">
        {content && <PRichText field={content.richText} />}
      </Prose>
    </ContentBlock>
  )
}

export default ContentBlockSlice
