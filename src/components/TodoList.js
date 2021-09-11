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

export const TodoList = () => {
  return (
    <TodoListContainer>
      <strong>ToDo List Name</strong>
      <i>Created at: 18-03-2021</i>
      <span>Complated: 15 Uncomplated: 10 All: 25</span>
    </TodoListContainer>
  );
};
