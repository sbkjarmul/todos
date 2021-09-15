import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Container } from './Container';
import { TextField } from './TextField';
import { Button } from './Button';
import { Group } from './Group';
import { Link } from 'react-router-dom';
import { UserService } from '../services/UserService';
import { useForm } from 'react-hook-form';

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
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginHeader = styled.h1`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;

  text-align: center;

  color: #ff9900;
  margin-bottom: 65px;
`;

const ArrowContainer = styled.div`
  align-self: flex-start;
  text-decoration: none;
`;

const RegisteredInfo = styled.p`
  margin-top: 100px;
  color: white;
`;

const ErrorMessage = styled.p`
  color: red;
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

const ArrowLink = () => {
  return (
    <ArrowContainer>
      <Link to='/'>
        <svg
          width='69'
          height='24'
          viewBox='0 0 69 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92894 13.1924 1.97919 12.6066 1.3934C12.0208 0.807616 11.0711 0.807617 10.4853 1.3934L0.939339 10.9393ZM69 10.5L2 10.5L2 13.5L69 13.5L69 10.5Z'
            fill='white'
          />
        </svg>
      </Link>
    </ArrowContainer>
  );
};

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    delete data.passwordRepeat;
    registerUser(data);
  };

  const registerUser = async (user) => {
    const userService = new UserService();

    try {
      const { status } = await userService.addUser(user);
      console.log(status);
      if (status === 200) {
        setIsRegistered(true);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <LoginBox>
          <ArrowLink></ArrowLink>
          <LoginHeader>Create an new account</LoginHeader>

          {!isRegistered ? (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Group className='form'>
                <TextField
                  placeholder='Username'
                  type='input'
                  {...register('username', { required: true })}
                />
                {errors.username && <Error>This field is required</Error>}
              </Group>

              <Group className='form'>
                <TextField
                  placeholder='Email'
                  type='email'
                  {...register('email', { required: true })}
                />
                {errors.email && <Error>This field is required</Error>}
              </Group>

              <Group className='form'>
                <TextField
                  placeholder='Password'
                  type='password'
                  {...register('password', { required: true })}
                />
                {errors.password && <Error>This field is required</Error>}
              </Group>

              <Group className='form'>
                <TextField
                  placeholder='Repeat password'
                  type='password'
                  {...register('passwordRepeat', { required: true })}
                />
                {errors.passwordRepeat && <Error>This field is required</Error>}
              </Group>
              <Button>Create</Button>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </Form>
          ) : (
            <RegisteredInfo>Your account have been registered!</RegisteredInfo>
          )}
        </LoginBox>
      </Container>
    </div>
  );
};
