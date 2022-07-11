import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HistoryLink = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  opacity: ${props => props.lighter ? 0.6 : 1};
  text-decoration: none;
  transform: rotate(90deg);
  position: absolute;
  top: ${props => props.lighter ? '60px' : '70px'};
  right: ${props => props.lighter ? 0 : '-20px'};
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`;
