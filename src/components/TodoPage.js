import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { TodoList } from './TodoList';
import { Container } from './Container';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { Group } from './Group';

import { selectAllLists, fetchTodoLists } from '../store/slices/todoListSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from './Loader';
import { TextField } from './TextField';

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
  bottom: -104px;

  width: 104px;
  height: 104px;
  margin: 0;

  border: none;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 150px;
  color: #ff9900;

  cursor: pointer;
`;

const SortSelect = styled.select`
  font-size: 24px;
  font-weight: 300;
  line-height: 28px;

  width: 265px;
  padding: 11px 18px;

  color: #454545;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  outline: none;
`;

export const TodoPage = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [sortType, setSortType] = useState('latest');
  const dispatch = useDispatch();
  const todoLists = useSelector(selectAllLists) || [];
  const error = useSelector((state) => state.todoList.error);
  const status = useSelector((state) => state.todoList.status);

  const closeListHandler = () => {
    setIsListOpen(false);
  };

  const openListHandler = () => {
    setIsListOpen(true);
  };

  useEffect(() => {
    dispatch(fetchTodoLists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEqualSearchValue = (todoList) =>
    todoList.name.toLowerCase().includes(searchValue.toLowerCase());

  const sortTodoList = (todoList) => {
    if (sortType === 'latest') {
      return todoList;
    }

    if (sortType === 'newest') {
      return todoList.slice().reverse();
    }

    if (sortType === 'desc') {
      return todoList
        .slice()
        .sort((previous, next) => sortByNameDesc(previous, next));
    }

    if (sortType === 'asc') {
      return todoList
        .slice()
        .sort((previous, next) => sortByNameAsc(previous, next));
    }

    return todoList;
  };

  const sortByNameAsc = (previous, next) => {
    const previousName = previous.name.toLowerCase();
    const nextName = next.name.toLowerCase();

    if (previousName > nextName) {
      return 1;
    }

    if (previousName < nextName) {
      return -1;
    }

    if (previous === nextName) {
      return 0;
    }
  };

  const sortByNameDesc = (previous, next) => {
    const previousName = previous.name.toLowerCase();
    const nextName = next.name.toLowerCase();

    if (previousName > nextName) {
      return -1;
    }

    if (previousName < nextName) {
      return 1;
    }

    if (previousName === nextName) {
      return 0;
    }
  };

  const showTodoLists = () => {
    if (status === 'loading') {
      return <Loader />;
    }

    if (status === 'succeeded') {
      return sortTodoList(todoLists)
        .filter((todoList) => isEqualSearchValue(todoList))
        .map((todoList) => <TodoList key={todoList.id} todoList={todoList} />);
    }

    if (status === 'failed') {
      return error;
    }
  };

  return (
    <div>
      <Navbar isLogout={true} />
      <Container>
        <Group className='search'>
          <TextField
            type='text'
            placeholder='Search'
            className='search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <SortSelect name='sort' onChange={(e) => setSortType(e.target.value)}>
            <option value='latest'>Latest</option>
            <option value='newest'>Newest</option>
            <option value='asc'>Asc</option>
            <option value='desc'>Desc</option>
          </SortSelect>
        </Group>
        <TodoLists>{showTodoLists()}</TodoLists>

        <AddListButton onClick={openListHandler}>+</AddListButton>
        {isListOpen && (
          <Modal closeModalHandler={closeListHandler}>
            <TodoForm closeForm={closeListHandler} />
          </Modal>
        )}
        <Group></Group>
      </Container>
    </div>
  );
};
