import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.ul`
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  background-color: ${colors.lightBlue};
  color: ${colors.white};
  height: 100%;
  list-style: none;
  width: 224px;
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */

  #title {
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 1;
    height: 70px;
  }

  hr {
    border: none;
    height: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin: 0 1rem 0 1rem;
  }

  li {
    margin: 16px;
    /* height: 40px; */
  }

  li a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    width: 192px;
  }

  li:hover a,
  li:hover a svg {
    color: rgba(255, 255, 255, 0.8);
  }

  li a svg {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.85rem;
    margin-right: 0.25rem;
  }

  li a span {
    font-size: 0.85rem;
    margin-left: 0.25rem;
    display: inline;
  }

  @media screen and (max-width: 767px) {
    width: 104px;
    display: flex;
    flex-direction: column;

    #title {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 72px;
    }

    li a svg {
      font-size: 1rem;
      margin-right: 0;
    }

    li a span {
      font-size: 0.65rem;
      margin-left: 0;
      margin-top: 5px;
    }
  }
`;
