import React from "react"
import { Hero } from "@components/molecules"
import { Button, ButtonGroup, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"

export const FullHeroSlice = ({ slice }) => {
  const { primary, items } = slice
  const { hero_title, hero_content, hero_image } = primary

  return (
    <Hero bgImage={hero_image}>
      <Prose>
        <PRichText field={hero_title.richText} />
        <PRichText field={hero_content.richText} />

        <ButtonGroup>
          {items?.map(({ button_text, button_link }, key) => {
            return (
              <PrismicLink
                key={key}
                field={button_link}
                internalComponent={Button}
                externalComponent={Button}
              >
                {button_text}
              </PrismicLink>
            )
          })}
        </ButtonGroup>
      </Prose>
    </Hero>
  )
}

FullHeroSlice.propTypes = {}

export default FullHeroSlice
