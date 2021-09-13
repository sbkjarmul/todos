import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TextField } from './TextField';
import { Checkbox } from './Checkbox';

const TodoContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin-bottom: 16px;
`;

export const TodoItem = ({ todo, setTodos }) => {
  const [name, setName] = useState(todo.name);
  const [isDone, setIsDone] = useState(todo.isDone);

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onBlurHandler = () => {
    updateTodo();
  };

  const updateTodo = () => {
    setTodos((todos) =>
      todos.map((item) => {
        if (item.id === todo.id) {
          item.isDone = isDone;
          item.name = name;
        }

        return item;
      })
    );
  };

  const inputRef = useRef();

  return (
    <TodoContainer>
      <Checkbox
        isChecked={isDone}
        setIsChecked={setIsDone}
        updateTodo={updateTodo}
        inputRef={inputRef}
      />
      <TextField
        className='todo'
        placeholder='Task name'
        value={name}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        ref={inputRef}
      />
    </TodoContainer>
  );
};
