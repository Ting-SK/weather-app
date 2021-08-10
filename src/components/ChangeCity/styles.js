import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.toggleBorder};
  margin-top: 20px;
  width: 285px;
  height: 40px;
`;
