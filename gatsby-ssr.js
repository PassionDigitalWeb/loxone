/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import * as React from "react"
import { Link } from "gatsby"
import { PrismicProvider } from "@prismicio/react"

function App({ children }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      {children}
    </PrismicProvider>
  )
}

export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: `en` })
}
