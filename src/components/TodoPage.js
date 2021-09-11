import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { TodoList } from './TodoList';
import { Container } from './Container';
import { Modal } from './Modal';

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
            <h1>elo</h1>
          </Modal>
        )}
      </Container>
    </div>
  );
};
