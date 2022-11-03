import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "@components/layout"
import { Feature } from "@components/molecules"
import Img from "../../storybook/assets/img_1.png"
import { Button, ButtonGroup, Heading, Prose, Text } from "@components/atoms"
import Banner from "@components/molecules/banner"

const IndexPage = () => (
  <Banner>
    <Prose align="center">
      <Heading node="h3" variant="h3" weight="300">
        Visit our showroom and experience
        <br /> <strong>home automation</strong> by loxone
      </Heading>
      <Button>Book a private tour</Button>
    </Prose>
  </Banner>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
//export const Head = () => <Seo title="Home" />

export default IndexPage
