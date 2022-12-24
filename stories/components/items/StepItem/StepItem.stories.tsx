import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/items/StepItem";
export default {
  title: "Components/Items/StepItem",
  component: StepItem,
} as ComponentMeta<typeof StepItem>;

const Template: ComponentStory<typeof StepItem> = (args: StepItemProps) => (
  <StepItem {...args} />
);
export const Default = Template.bind({});
Default.args = {
  icon: "step1",
  title: "1. Start",
  desc1: "Pilih salah satu game",
  desc2: "yang ingin kamu top up",
};
