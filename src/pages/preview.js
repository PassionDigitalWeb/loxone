import * as React from "react"
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews"
import Loader from "@components/atoms/loader"
import { Heading } from "@components/atoms"

const PreviewPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Heading node="h1" variant="h5">
        Loading Preview
      </Heading>
      <Loader></Loader>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage)
