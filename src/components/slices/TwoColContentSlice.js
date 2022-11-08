import React from "react"
import { Prose } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"
import TwoColContent from "@components/molecules/two-column-content"

export const TwoColContentSlice = ({ slice }) => {
  const { items } = slice

  return (
    <TwoColContent>
      {items?.map(({ content }, key) => {
        return (
          <TwoColContent.Col key={key}>
            <Prose>
              <PRichText field={content.richText} />
            </Prose>
          </TwoColContent.Col>
        )
      })}
    </TwoColContent>
  )
}

export default TwoColContentSlice
