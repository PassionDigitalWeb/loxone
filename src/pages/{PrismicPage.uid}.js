import * as React from "react"
import { graphql } from "gatsby"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

const PageTemplate = ({ data }) => {
  const document = data.prismicPage.data

  return (
    <div>
      <h1>{document.title.text}</h1>
    </div>
  )
}

export const query = graphql`
  query PageTemplate($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        title {
          text
        }
      }
    }
  }
`

export default withPrismicPreview(PageTemplate)
