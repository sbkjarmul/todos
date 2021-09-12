import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from './TextField';
import { Button } from './Button';
import { Group } from './Group';
import { TodoItem } from './TodoItem';
import { TodoService } from '../services/TodoService';

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

export const TodoForm = ({ closeForm }) => {
  console.log('Todoform render');
  const [todos, setTodos] = useState([]);
  const [listName, setListName] = useState('');

  const cancelTodoHandler = (e) => {
    e.preventDefault();
    setTodos(todos.slice(0, todos.length - 1));
  };

  const addTodoHandler = (e) => {
    e.preventDefault();

    const todo = {
      id: getRandomId('todo'),
      name: '',
      isDone: false,
    };

    setTodos([...todos, todo]);
  };

  const closeFormHandler = (e) => {
    e.preventDefault();
    closeForm();
  };

  const setCancelButtonClass = () => {
    if (isCancelButtonDisabled) {
      return 'small secondary disabled';
    }

    return 'small secondary';
  };

  const isCancelButtonDisabled = todos.length > 0 ? false : true;

  const getRandomId = (name = '') => {
    return name + Math.floor(Math.random() * (1000 - 1) + 1);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const todoService = new TodoService();

    const todoList = {
      name: listName,
      task: todos,
    };

    try {
      const response = todoService.addTodoList(todoList);
      console.log(response);
      closeFormHandler(e);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    setListName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <TextField
        type='text'
        value={listName}
        onChange={onChangeHandler}
        placeholder='List name'
      />
      <Todos>
        {todos.map((todo) => (
          <TodoItem
            key={getRandomId(todo.name)}
            todo={todo}
            setTodos={setTodos}
          />
        ))}

        <Group className='todo'>
          <Button
            className={setCancelButtonClass()}
            disabled={isCancelButtonDisabled}
            onClick={cancelTodoHandler}
          >
            Cancel
          </Button>
          <Button className='small' onClick={addTodoHandler}>
            Add
          </Button>
        </Group>
      </Todos>

      <Group>
        <Button className='text' onClick={closeFormHandler}>
          Cancel
        </Button>
        <Button>Save</Button>
      </Group>
    </Form>
  );
};
