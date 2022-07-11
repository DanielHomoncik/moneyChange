import styled from 'styled-components';

export const FormStyles = styled.form`
  .inputBox {
    border-bottom: 2px solid #C2CBD9;
    margin-bottom: 3rem;
    font-size: 16px;
    color: #C2CBD9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 20px;
    color: #454860;
    ::placeholder {
      font-size: 16px;
      color: #C2CBD9;
    }
  }
    input, .resultText, .result {
    padding: 10px;
    line-height: 27px;
  }
  .currencies {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
  select {
    background: #FFFFFF;
    box-shadow: 3px 3px 7px #C2CBD9;
    border-radius: 5px;
    border: none;
    padding: 1rem 3rem;
    &:focus {
      outline: none;
    }
  }
  option {
    min-height: 20px;
  }
  .result {
    font-size: 20px;
    line-height: 27px;
    font-weight: 600;
    color: #454860;
  }
  .icon-rotate {
    transform: rotate(180deg) translate(0, 22px);
  }
  .error {
    color: #E82B52;
    font-size: 12px;
    position: absolute;
    bottom: -20px;
    left: 5px;
  }
`;
