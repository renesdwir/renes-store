import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/items/GameItem";
export default {
  title: "Components/Items/GameItem",
  component: GameItem,
} as ComponentMeta<typeof GameItem>;

const Template: ComponentStory<typeof GameItem> = (args: GameItemProps) => (
  <GameItem {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: "Super Mechs",
  category: "Mobile",
  thumbnail: "/img/thumbnail-1.png",
};
