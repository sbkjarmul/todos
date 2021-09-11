import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Container } from './Container';

const Background = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;

  padding-top: 136px;
  padding-bottom: 105px;

  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Window = styled.div`
  position: relative;
  background: #2d2d2d;
  width: 100%;
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
