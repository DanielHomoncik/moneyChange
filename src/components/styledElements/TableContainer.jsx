import styled from 'styled-components';

export const TableContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
  width: 75%;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #96B7F2; 
  }
  ::-webkit-scrollbar-thumb {
    background: #000000; 
  }
`;
