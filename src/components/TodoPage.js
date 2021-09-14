import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { TodoList } from './TodoList';
import { Container } from './Container';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { Button } from './Button';
import { UserService } from '../services/UserService';
import { Group } from './Group';

import { selectAllLists, fetchTodoLists } from '../store/slices/todoListSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from './Loader';

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
  // const [todoLists, setTodoLists] = useState([]);
  const dispatch = useDispatch();
  const todoLists = useSelector(selectAllLists);
  const error = useSelector((state) => state.todoList.error);
  const status = useSelector((state) => state.todoList.status);

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
  //       const data = await todoService.getTodoLists();
  //       setTodoLists(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    dispatch(fetchTodoLists());
  }, []);

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

    try {
      await userService.login(user);
    } catch (e) {
      console.log(e.message);
    }
  };

  const showTodoLists = () => {
    if (status === 'loading') {
      return <Loader />;
    }

    if (status === 'succeeded') {
      return todoLists.map((todoList) => (
        <TodoList key={todoList.id} todoList={todoList} />
      ));
    }

    if (status === 'failed') {
      return error;
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <TodoLists>{showTodoLists()}</TodoLists>

        <AddListButton onClick={openListHandler}>+</AddListButton>
        {isListOpen && (
          <Modal closeModalHandler={closeListHandler}>
            <TodoForm closeForm={closeListHandler} />
          </Modal>
        )}
        <Group>
          <Button onClick={registerUser}>Register User</Button>
          <Button onClick={loginUser}>Login User</Button>
        </Group>
      </Container>
    </div>
  );
};
