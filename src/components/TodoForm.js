import React from 'react';
import styled from 'styled-components';
import { TextField } from './TextField';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { Group } from './Group';

const Form = styled.form`
  padding: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Todos = styled.ul`
  width: 100%;
  margin-top: 61px;
  margin-bottom: 61px;
  padding-top: 61px;
  height: 100%;

  list-style: none;
  border-top: 4px solid #ff9900;
  overflow-y: scroll;
`;

const Todo = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin-bottom: 16px;
`;

export const TodoForm = () => {
  const cancelTodoHandler = (e) => {
    e.preventDefault();
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <TextField type='text' />
      <Todos>
        <Todo>
          <Checkbox />
          <TextField className='todo' placeholder='Task name' />
        </Todo>

        <Todo>
          <Checkbox />
          <TextField className='todo' placeholder='Task name' />
        </Todo>

        <Group className='todo'>
          <Button className='small secondary' onClick={cancelTodoHandler}>
            Cancel
          </Button>
          <Button className='small' onClick={addTodoHandler}>
            Add
          </Button>
        </Group>
      </Todos>

      <Group>
        <Button className='text'>Cancel</Button>
        <Button>Save</Button>
      </Group>
    </Form>
  );
};
