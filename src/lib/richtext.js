import { Heading, Text } from "@components/atoms"
import React from "react"
import { PrismicRichText } from "@prismicio/react"

export const richComponents = {
  heading1: ({ children }) => (
    <Heading variant="h1" node="h1">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading variant="h2" node="h2">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading variant="h3" node="h3">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading variant="h4" node="h4">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading variant="h5" node="h5">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading variant="h6" node="h6">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <Text>{children}</Text>,
}

export const PRichText = ({ field }) => (
  <PrismicRichText field={field} components={richComponents} />
)
