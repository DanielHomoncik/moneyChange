import styled from 'styled-components';

export const Background = styled.div`
  background: #F6F7F9 0 0 no-repeat padding-box;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    display: block;
    background: transparent linear-gradient(180deg, #3578EB 0%, #1C5CC5 100%) 0% 0% no-repeat padding-box;
    width: 45%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
