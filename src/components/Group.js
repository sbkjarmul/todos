import styled from 'styled-components';

export const Group = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &.todo {
    justify-content: flex-end;

    * {
      margin-left: 67px;
    }
  }
`;
