import styled from "styled-components";

export const InputPlace = styled.input`
  width: 280px;
  height: 30px;
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: none;
  border-bottom: 1px solid gray;
  text-overflow: ellipsis;
  overflow: hidden;
  &:focus {
    box-shadow: 0px 0.2em 2.5em #c4c4c4;
    transform: scale(1.025);
  }
`;
