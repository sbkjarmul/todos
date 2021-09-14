import styled from 'styled-components';

export const Loader = styled.div`
  width: 100px;
  height: 100px;

  border: 10px solid #808080;
  border-top-color: #ff9900;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
