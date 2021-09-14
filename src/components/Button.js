import styled from 'styled-components';

export const Button = styled.button`
  min-width: 239px;
  height: 78px;

  color: #ffffff;
  background: #ff9900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;

  text-transform: uppercase;
  font-weight: 500;
  line-height: 42px;
  font-size: 36px;

  cursor: pointer;

  &:hover {
    background-color: #808080;
  }

  &.text {
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;

    color: #ff9900;
    background: transparent;
    box-shadow: none;
    padding: 0;
    margin-left: 32px;
    border-radius: unset;

    &:hover {
      border-bottom: 1px solid #ff9900;
    }
  }

  &.small {
    font-size: 24px;
    line-height: 28px;
    height: 44px;
    max-width: 128px;
  }

  &.secondary {
    background-color: #ff3d00;
    &:hover {
      background-color: #808080;
    }
  }

  &.disabled {
    background-color: #808080;
  }

  &.lowercase {
    text-transform: lowercase;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &.logout {
    background: transparent;
    box-shadow: none;
    padding: 0;

    border-radius: 0;
    min-width: fit-content;

    &:hover {
      border-bottom: 1px solid #ff9900;
    }
  }
`;
