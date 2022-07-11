import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { H2 } from './styledElements/H2';
import { ConvertButton } from './styledElements/ConvertButton';
import { Loader } from './styledElements/Loader';
import { FormStyles } from './styledElements/FormStyles';
import { API_KEY, API_URL } from '../utils/apiConstants';
import { ArrowIcon } from '../icons/ArrowIcon';

const initialValues = {
  currFrom: 'PLN',
  amount: '',
  currTo: 'USD'
};

const validate = values => {
  const errors = {};

  const amountIsNum = (new RegExp('[0-9]')).test(values.amount);
  if (!amountIsNum) {
    errors.amount = 'Nieprawidłowa wartość';
  }
  return errors;
};

export const CurrencyConverter = props => {
  const history = useHistory();
  const { currenciesList } = props;
  const [result, setResult] = useState('');

  const onSubmit = async values => {
    const { currFrom, currTo, amount } = values;
    const query = `${currFrom}_${currTo}`;
    const response = await fetch(
      `${API_URL}/api/v7/convert?q=${query}&compact=ultra&apiKey=${API_KEY}`
    );
    const data = await response.json();

    const result = data[query] * Number(amount);
    const fixedResult = result.toFixed(2);
    setResult(fixedResult);

    props.addToHistory({
      currFrom,
      currTo,
      amountFrom: amount,
      result: fixedResult,
      date: new Date().getTime()
    });

    history.push('/history');
  };

  return (
    <>
      <H2>Konwerter walut</H2>

      {!currenciesList.length && <Loader />}

      {!!currenciesList.length && (
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          validate={validate}
          render={({ handleSubmit, submitting, values }) => (
            <FormStyles onSubmit={handleSubmit}>
              <Field name="amount">
                {({ input, meta }) => (
                    <div className="inputBox">
                      <input {...input} placeholder="Wpisz kwotę"/>
                      <span>{values.currFrom}</span>
                      {meta.error && meta.touched && <span className="error">{meta.error}</span>}
                    </div>
                )}
              </Field>

              <div className="inputBox">
                {!result ? (
                    <span className="resultText">Wynik</span>
                ) : (
                    <span className="result">{result}</span>
                )}
                <span>{values.currTo}</span>
              </div>

              <div className="currencies">
                <Field name="currFrom">
                  {({ input}) => (
                      <>
                        <select {...input} >
                          {currenciesList.map(currency => (
                              <option value={currency.id} key={currency.id}>
                                {currency.id}
                              </option>
                          ))}
                        </select>
                      </>
                  )}
                </Field>

                <div>
                  <ArrowIcon />
                  <div className="icon-rotate"><ArrowIcon/></div>
                </div>

                <Field name="currTo">
                  {({ input}) => (
                      <>
                        <select {...input} >
                          {currenciesList.map(currency => (
                              <option value={currency.id} key={currency.id}>
                                {currency.id}
                              </option>
                          ))}
                        </select>
                      </>
                  )}
                </Field>
              </div>

              <ConvertButton type="submit" disabled={submitting || !values.amount}>
                Konwertuj
              </ConvertButton>
            </FormStyles>
          )}
        />
      )}
    </>
  );
};

CurrencyConverter.propTypes = {
  addToHistory: PropTypes.func.isRequired,
  currenciesList: PropTypes.arrayOf(PropTypes.object).isRequired
};
