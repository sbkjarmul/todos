import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { TodoList } from './TodoList';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 1175px;
  margin: auto;
`;

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

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <TodoLists>
          <TodoList />
          <TodoList />
        </TodoLists>
        <AddListButton>+</AddListButton>
      </Container>
    </div>
  );
};
