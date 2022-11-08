import React from "react"
import { Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { ContentBlock } from "@components/molecules"

export const ContentBlockSlice = ({ slice }) => {
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
