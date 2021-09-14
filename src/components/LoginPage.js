import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Container } from './Container';
import { TextField } from './TextField';
import { Button } from './Button';
import { Group } from './Group';

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 893px;
  height: 1045px;

  background: #2d2d2d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 70px;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const LoginHeader = styled.h1`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;

  text-align: center;

  color: #ff9900;
`;

export const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <LoginBox>
          <LoginHeader>Login</LoginHeader>
          <Form>
            <Group className='form'>
              <TextField placeholder='Email or Username' type='input' />
              <TextField placeholder='Password' type='password' />
            </Group>
            <Button>Login</Button>
            <p>or</p>
            <Button className='text lowercase'>create an account</Button>
          </Form>
        </LoginBox>
      </Container>
    </div>
  );
};
