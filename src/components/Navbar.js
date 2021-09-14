import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { LogoutIcon } from './LogoutIcon';
import { useHistory } from 'react-router-dom';
import { Button } from './Button';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 40px;
`;

export const Navbar = ({ isLogout = false }) => {
  const history = useHistory();

  const onLogout = () => {
    history.push('/');
    localStorage.removeItem('token');
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
