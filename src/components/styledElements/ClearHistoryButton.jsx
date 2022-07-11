import styled from 'styled-components';

export const ClearHistoryButton = styled.button`
  border: none;
  text-align: left;
  text-decoration: underline;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: #FFFFFF;
  background: none;
  cursor: pointer;
  outline: none;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;
