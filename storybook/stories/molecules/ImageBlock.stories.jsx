import React from "react"
import { ContentBlock, Feature, ImageBlock } from "@components/molecules"
import { Button, ButtonGroup, Heading, Prose, Text } from "@components/atoms"

import Banner from "@components/molecules/banner"
import Img from "../../assets/img.png"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/ImageBlock",
  component: ImageBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <ImageBlock {...args}>
    <ImageBlock.Content>
      <Prose align="center">
        <Heading node="h2" variant="h2">
          Image Block
        </Heading>
        <Text>
          Placerat vestibulum lectus mauris ultrices eros in. Est pellentesque
          elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
          Euismod elementum nisi quis eleifend.
        </Text>
      </Prose>
    </ImageBlock.Content>
    <ImageBlock.Image imageUrl={Img} />
    <ImageBlock.Content>
      <Prose align="center">
        <ButtonGroup>
          <Button color="dark-grey">View our projects</Button>
          <Button color="green">Book a tour</Button>
        </ButtonGroup>
      </Prose>
    </ImageBlock.Content>
  </ImageBlock>
)

export const Default = Template.bind({})
