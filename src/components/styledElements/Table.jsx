import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td, th {
    border: none;
    border-bottom: 1px solid #ffffff;
    padding: 0.75em 0.5em;
    text-align: left;  
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;
    color: #ffffff;
  }
  .curr, .currTo {
    text-align: right;
  }
  th, .currTo {
    font-weight: 600;
  }
  .arrow {
    padding: 0 0 0 16px;
  }
`;
