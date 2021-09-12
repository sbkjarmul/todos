import React from 'react';
import styled from 'styled-components';

const TodoListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 36px;
  margin-top: 36px;

  border-radius: 8px;

  background-color: #2d2d2d;
  color: #ffffff;

  font-size: 24px;
`;

export const TodoList = ({ todoList, onClick }) => {
  const allTasks = todoList.task.length;
  const complatedTasks = todoList.task.filter((task) => task.isDone === true)
    .length;
  const uncomplatedTasks = allTasks - complatedTasks;

  return (
    <TodoListContainer>
      <strong>{todoList.name}</strong>
      <i>Created at: {todoList.createdAt}</i>
      <span>
        Complated: {complatedTasks} Uncomplated: {uncomplatedTasks} All:{' '}
        {allTasks}
      </span>
    </TodoListContainer>
  );
};
