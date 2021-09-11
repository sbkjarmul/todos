import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Container } from './Container';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Window = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  margin-top: 136px;
  margin-bottom: 105px;
  padding: 36px;

  background: #2d2d2d;
`;

export const Modal = ({ closeModalHandler, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, closeModalHandler);

  return ReactDOM.createPortal(
    <Background ref={ref}>
      <Container>
        <Window>{children}</Window>
      </Container>
    </Background>,
    document.getElementById('modal-root')
  );
};

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        ref.current === event.target ||
        ref.current === event.target.parentElement
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
