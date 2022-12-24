import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/basics/Input";
export default {
  title: "Components/Basics/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
};
