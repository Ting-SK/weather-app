import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { Anchor, Text } from "./styles";

export const Links = () => {
  return (
    <Anchor href="https://github.com/Ting-SK">
      <GithubOutlined />
      <Text>Ting-SK</Text>
    </Anchor>
  );
};
