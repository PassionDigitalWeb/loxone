import React from "react"

import { AnchorLink } from "@components/atoms"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Atoms/AnchorLink",
  component: AnchorLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <AnchorLink {...args}>Anchor Link</AnchorLink>

export const Default = Template.bind({})

export const Light = Template.bind({})
Light.args = {
  isLight: true,
}
Light.parameters = {
  backgrounds: { default: "dark" },
}
