import React from "react";
import styled from "styled-components";
import { GithubOutlined } from "@ant-design/icons";

export const GitHub = () => {
  return (
    <Anchor href="https://github.com/Ting-SK">
      <GithubOutlined />
      <Text>Ting-SK</Text>
    </Anchor>
  );
};

const Text = styled.p`
  font-size: 12px;
  color: #fafafa;
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
