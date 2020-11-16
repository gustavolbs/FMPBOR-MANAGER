import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: ${colors.background};
`;

export const Content = styled.div`
  width: 100%;
`;

export const ProfileContainer = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  h1,
  h2 {
    color: #5a5c69 !important;
    font-size: 1.75rem;
    font-weight: 40;
    margin-bottom: 1.5rem;
  }

  div#changePassword {
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
