import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { LogoutIcon } from './LogoutIcon';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 40px;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <LogoutIcon />
    </NavbarContainer>
  );
};
