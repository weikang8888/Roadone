import React from "react";
import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../component/Header/Header";

export default {
  title: "Components/Header",
  component: Header,
} as Meta<typeof Header>;

const Template: Story<typeof Header> = (args) => (
  <BrowserRouter>
    <Header logo={""} logoClassName={""} logoDivClassName={""} />;
  </BrowserRouter>
);

export const HeaderStory = Template.bind({});
HeaderStory.storyName = "HeaderTop";
