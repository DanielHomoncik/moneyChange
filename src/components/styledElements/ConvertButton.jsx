import styled from 'styled-components';

export const ConvertButton = styled.button`
  background: ${props => props.disabled ? '#C2CBD9' : 'transparent linear-gradient(99deg, #3578EB 0%, #1C5CC5 100%)'};
  border-radius: 100px;
  border: none;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #FFFFFF;
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
  outline: none;
  cursor: pointer;
`;
