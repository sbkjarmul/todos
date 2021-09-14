import styled from 'styled-components';

export const TextField = styled.input`
  width: 100%;
  font-size: 24px;
  font-weight: 300;
  line-height: 28px;

  padding: 11px 18px;

  color: #454545;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  outline: none;

  &.todo {
    color: #808080;
    border-bottom: 1px solid #ff9900;
    background: none;
    box-shadow: none;
    border-radius: 0;
    padding: 6px 16px;
    font-weight: 400;
  }
`;
