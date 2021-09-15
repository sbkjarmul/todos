import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Container } from './Container';
import { TextField } from './TextField';
import { Button } from './Button';
import { Group } from './Group';
import { useForm } from 'react-hook-form';
import { AuthService } from '../services/AuthService';

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 893px;
  height: fit-content;

  background: #2d2d2d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 70px;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const LoginHeader = styled.h1`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;

  text-align: center;

  color: #ff9900;
  margin-bottom: 100px;
`;

const Text = styled.p`
  margin-top: 44px;
  margin-top: 22px;
`;

const Error = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: red;
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
`;

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLogged, setIsLogged] = useState(false);

  const loginUser = async (user) => {
    const authService = new AuthService();

    try {
      const response = await authService.login(user);

      if (response.status === 200) {
        setIsLogged(true);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const onSubmit = (data) => {
    loginUser(data);
  };

  if (isLogged) {
    return <Redirect to='/todo' />;
  }

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
              {errors.identifier && <Error>This field is required</Error>}
            </Group>
            <Group className='form'>
              <TextField
                placeholder='Password'
                type='password'
                defaultValue='12345'
                {...register('password', { required: true })}
              />
              {errors.password && <Error>This field is required</Error>}
            </Group>
            <Button>Login</Button>
            <Text>or</Text>
            <Button className='text lowercase'>
              <Link to='/register'>create an account</Link>
            </Button>
          </Form>
        </LoginBox>
      </Container>
    </div>
  );
};
