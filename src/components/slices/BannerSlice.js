import React from "react"
import Banner from "@components/molecules/banner"
import { Button, ButtonGroup, Heading, Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"

export const BannerSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, title } = primary
  return (
    <Banner>
      <Prose align="center">
        {title && (
          <Heading
            node="h3"
            variant="h3"
            weight="300"
            dangerouslySetInnerHTML={{ __html: title.html }}
          ></Heading>
        )}
        {content && <PRichText field={content.richText} />}
        {items && (
          <ButtonGroup>
            {items?.map(({ button_text, button_link, colour }, key) => {
              return (
                <PrismicLink
                  key={key}
                  field={button_link}
                  internalComponent={props => (
                    <Button color={colour} {...props} />
                  )}
                  externalComponent={props => (
                    <Button color={colour} {...props} />
                  )}
                >
                  {button_text}
                </PrismicLink>
              )
            })}
          </ButtonGroup>
        )}
      </Prose>
    </Banner>
  )
}

export default BannerSlice
