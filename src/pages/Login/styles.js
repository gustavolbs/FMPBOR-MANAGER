import styled from 'styled-components';
// import colors from '../../styles/colors';

export const Container = styled.div`
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  height: 100%;
  display: flex;
  justify-content: center;

  .card {
    margin: 48px 0;
    background: white;
    max-height: 400px;
    height: auto;
    max-width: 492px;
    width: 100%;
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: 0.35rem;

    h1 {
      color: #3a3b45 !important;
      font-weight: 400;
      line-height: 1.2;
      font-size: 1.5rem;
      margin-bottom: 1.5rem !important;
    }
  }

  @media screen and (max-width: 500px) {
    .card {
      width: 80vw;
      min-width: 300px;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label input {
      width: 100%;
      font-size: 0.8rem;
      border-radius: 10rem;
      padding: 1.5rem 1rem;
      display: block;
      width: 100%;
      height: 50px;
      padding: 0.375rem 0.75rem;
      font-weight: 400;
      line-height: 1.5;
      color: #6e707e;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #d1d3e2;
      margin-bottom: 1rem;
    }

    label input::placeholder {
      font-size: 0.8rem;
    }

    label input:focus {
      color: #6e707e;
      background-color: #fff;
      border-color: #bac8f3;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }

  button {
    font-size: 0.8rem;
    border-radius: 10rem;
    padding: 0.75rem 1rem;
    color: #fff;
    background-color: #4e73df;
    border: 1px solid #4e73df;
    display: block;
    width: 100%;
  }

  button:hover {
    background-color: #2e59d9;
    border-color: #2653d4;
    transition: border-color 0.15s ease-in-out,
      background-color 0.15s ease-in-out;
  }

  button:focus {
    border-color: #bac8f3;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
