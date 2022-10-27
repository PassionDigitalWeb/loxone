/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { Link } from "gatsby"
import { PrismicProvider } from "@prismicio/react"
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews"

import { linkResolver } from "./config/prismic/linkResolver"
import Layout from "./src/components/layout"

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

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        // componentResolver: componentResolverFromMap({
        //   page: PageTemplate,
        // }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
