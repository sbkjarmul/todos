import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { LogoutIcon } from './LogoutIcon';
import { useHistory } from 'react-router-dom';
import { Button } from './Button';
import { AuthService } from '../services/AuthService';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 40px;
`;

export const Navbar = ({ isLogout = false }) => {
  const history = useHistory();
  const authService = new AuthService();

  const onLogout = () => {
    authService.removeToken();
    history.push('/');
  };

  return (
    <NavbarContainer>
      <Logo />
      {isLogout && (
        <Button className='logout' onClick={onLogout}>
          <LogoutIcon />
        </Button>
      )}
    </NavbarContainer>
  );
};
