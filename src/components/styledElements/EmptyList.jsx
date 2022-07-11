import React from 'react';
import styled from 'styled-components';

export const EmptyList = styled(props => (
  <p {...props}>Brak historii konwersji walut</p>
))`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: #ffffff;
`;
