import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto 2em auto;
  border-radius: 50%;
  border: 8px solid #d3d3d3;
  border-top: 8px solid #05386b;
  animation: ${rotate} 2s linear infinite;
`;
