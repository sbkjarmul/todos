import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { TodoList } from './TodoList';
import { Container } from './Container';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { TodoService } from '../services/TodoService';
import { Button } from './Button';
import { UserService } from '../services/UserService';
import { Group } from './Group';

const TodoLists = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  height: 100%;

  list-style: none;
`;

const AddListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  bottom: 65px;

  width: 104px;
  height: 104px;

  border: none;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 150px;
  color: #ff9900;

  cursor: pointer;
`;

export const TodoPage = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const closeListHandler = () => {
    setIsListOpen(false);
  };

  const openListHandler = () => {
    setIsListOpen(true);
  };

  // useEffect(() => {
  //   const todoService = new TodoService();

  //   (async () => {
  //     try {
  //       todoService.getTodoLists();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const registerUser = async () => {
    const userService = new UserService();
    const user = {
      username: 'sbktest',
      email: 'sbktest@gmail.com',
      password: 'pass',
    };

    try {
      userService.register(user);
    } catch (e) {
      console.log(e.message);
    }
  };

  const loginUser = async () => {
    const userService = new UserService();
    const user = {
      identifier: 'sbktest',
      password: 'pass',
    };

    console.log(user);

    try {
      await userService.login(user);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getList = async () => {
    const todoService = new TodoService();

    try {
      await todoService.getTodoLists();
    } catch (error) {
      console.log(error);
    }
  };

  const addList = async () => {
    const todoService = new TodoService();

    const list = {
      name: 'List Sbk',
      task: [
        {
          name: 'Task 1',
          isDone: false,
        },
        {
          name: 'Task 2',
          isDone: true,
        },
      ],
    };

    try {
      await todoService.addTodoList(list);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <TodoLists>
          <TodoList />
          <TodoList />
        </TodoLists>
        <AddListButton onClick={openListHandler}>+</AddListButton>
        {isListOpen && (
          <Modal closeModalHandler={closeListHandler}>
            <TodoForm closeForm={closeListHandler} />
          </Modal>
        )}
        <Group>
          <Button onClick={registerUser}>Register User</Button>
          <Button onClick={loginUser}>Login User</Button>
          <Button onClick={getList}>Get Todos</Button>
          <Button onClick={addList}>Add Todo List</Button>
        </Group>
      </Container>
    </div>
  );
};
