import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Group } from './Group';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { TodoService } from '../services/TodoService';

const TodoListContainer = styled.li`
  position: relative;
  width: 100%;
  padding: 36px;
  margin-top: 36px;
  border-radius: 8px;

  color: #ffffff;

  font-size: 24px;

  transform-style: preserve-3d;
  transition: all 0.6s;
  perspective: 1000px;

  &:hover {
    transform: rotateX(180deg);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 36px;
    background-color: #2d2d2d;

    backface-visibility: hidden;
  }

  .back {
    transform: rotateX(180deg);
  }
`;

export const TodoList = ({ todoList }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const allTasks = todoList.task.length;
  const complatedTasks = todoList.task.filter((task) => task.isDone === true)
    .length;
  const uncomplatedTasks = allTasks - complatedTasks;

  const closeListHandler = () => {
    setIsListOpen(false);
  };

  const openListHandler = () => {
    setIsListOpen(true);
  };

  const deleteHandler = () => {
    const todoService = new TodoService();

    try {
      todoService.deleteTodoList(todoList.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TodoListContainer>
      <div className='front'>
        <strong>{todoList.name}</strong>
        <i>Created at: {todoList.createdAt}</i>
        <span>
          Complated: {complatedTasks} Uncomplated: {uncomplatedTasks} All:{' '}
          {allTasks}
        </span>
      </div>
      <Group className='back todo'>
        <Button className='small' onClick={openListHandler}>
          Edit
        </Button>
        <Button className='small secondary' onClick={deleteHandler}>
          Delete
        </Button>
      </Group>
      {isListOpen && (
        <Modal closeModalHandler={closeListHandler}>
          <TodoForm
            closeForm={closeListHandler}
            listData={todoList}
            isEdit={true}
          />
        </Modal>
      )}
    </TodoListContainer>
  );
};
