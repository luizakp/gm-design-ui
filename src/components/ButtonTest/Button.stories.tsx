import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonTest from "./ButtonTest";

export default {
  title: "UI/Button",
  component: ButtonTest,
  argTypes: {
    fullWidth: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof ButtonTest>;

const Template: ComponentStory<typeof ButtonTest> = (args) => (
  <ButtonTest {...args}>Button</ButtonTest>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  intent: "danger",
};
