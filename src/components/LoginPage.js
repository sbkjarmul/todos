import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Container } from './Container';
import { TextField } from './TextField';
import { Button } from './Button';
import { Group } from './Group';
import { useForm } from 'react-hook-form';
import { UserService } from '../services/UserService';

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
  align-items: center;
  color: white;
`;

const LoginHeader = styled.h1`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;

  text-align: center;

  color: #ff9900;
`;

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const loginUser = async (user) => {
    const userService = new UserService();

    try {
      const response = await userService.login(user);

      if (response.status === 200) {
        history.push('/todo');
      }
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data);
  };

  //pola12345@wp.pl
  //12345

  return (
    <div>
      <Navbar />
      <Container>
        <LoginBox>
          <LoginHeader>Login</LoginHeader>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Group className='form'>
              <TextField
                placeholder='Email or Username'
                type='input'
                defaultValue='pola12345'
                {...register('identifier', { required: true })}
              />
              {errors.identifier && <span>This field is required</span>}
              <TextField
                placeholder='Password'
                type='password'
                defaultValue='12345'
                {...register('password', { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </Group>
            <Button>Login</Button>
            <span>or</span>
            <Button className='text lowercase'>
              <Link to='/register'>create an account</Link>
            </Button>
          </Form>
        </LoginBox>
      </Container>
    </div>
  );
};
