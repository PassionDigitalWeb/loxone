import React from "react"
import { Prose } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"

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

export default IntroSlice
