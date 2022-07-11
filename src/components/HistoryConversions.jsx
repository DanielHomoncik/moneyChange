import React from 'react';
import PropTypes from 'prop-types';
import { EmptyList } from './styledElements/EmptyList';
import { Table } from './styledElements/Table';
import { TableContainer } from './styledElements/TableContainer';
import { STORAGE_KEY } from '../utils/localStorageKey';
import { RightArrowIcon } from '../icons/RightArrowIcon';
import { testLocalStorage } from '../utils/testLocalStorage';
import { HistoryLink } from './styledElements/HistoryLink';
import { CloseIcon } from '../icons/CloseIcon';

export const HistoryConversions = props => {
  const { conversionsList, setConversionsHistory } = props;

  const clearHistory = () => {
    setConversionsHistory([]);
    if (testLocalStorage()) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  };

  return (
    <>
      <HistoryLink to="/"><CloseIcon /> Historia</HistoryLink>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th className="curr">Przed konwersją</th>
              <td/>
              <th className="curr">Po konwersji</th>
            </tr>
          </thead>
          <tbody>
            {conversionsList.map(({ currFrom, currTo, amountFrom, result, date}) => {
              const dateFormatted = new Date(date).toLocaleDateString();
              return (
                <tr key={date}>
                  <td>{dateFormatted}</td>
                  <td className="curr">{amountFrom} {currFrom}</td>
                  <td>
                    <span className="arrow"><RightArrowIcon /></span>
                  </td>
                  <td className="currTo">{result} {currTo}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </TableContainer>
      {!conversionsList.length && <EmptyList />}
      
    </>
  );
};

HistoryConversions.propTypes = {
  conversionsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setConversionsHistory: PropTypes.func.isRequired
};
