import React from "react";

import Button from "../../website/src/components/atoms/button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: "button",
  color: "green",
};

export const Green = Template.bind({});
Green.args = {
  variant: "button",
  color: "green",
};

export const DarkGrey = Template.bind({});
DarkGrey.args = {
  variant: "button",
  color: "dark-grey",
};

export const GreenOutline = Template.bind({});
GreenOutline.args = {
  variant: "button-outline",
  color: "green",
};

export const DarkGreyOutline = Template.bind({});
DarkGreyOutline.args = {
  variant: "button-outline",
  color: "dark-grey",
};
