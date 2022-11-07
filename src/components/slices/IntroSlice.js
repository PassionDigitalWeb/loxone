import React from "react"
import { Prose, Text } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"

const IntroSlice = ({ slice }) => {
  const { primary, items } = slice
  const { title, content } = primary

  console.log({ primary })

  return (
    <SplitIntro title={<PRichText field={title.richText} />}>
      <Prose>
        <PRichText field={content.richText} />
      </Prose>
    </SplitIntro>
  )
}

export default IntroSlice
