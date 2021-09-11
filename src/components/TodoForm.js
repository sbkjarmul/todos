import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  padding: 36px;
  background: #2d2d2d;
`;

const ButtonGroup = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.5em 2em;

  color: #ffffff;
  background: #ff9900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;

  text-transform: uppercase;
  font-weight: 500;
  line-height: 42px;
  font-size: 36px;

  &.cancel {
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;

    color: #ff9900;
    background: transparent;
    box-shadow: none;
    padding: 0;
    margin-left: 32px;
  }
`;

export const TodoForm = () => {
  return (
    <Form>
      <input type='text' />
      <ButtonGroup>
        <Button className='cancel'>Cancel</Button>
        <Button>Save</Button>
      </ButtonGroup>
    </Form>
  );
};
