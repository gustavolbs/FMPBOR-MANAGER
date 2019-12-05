import styled from 'styled-components';
// import colors from '../../styles/colors';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background: #fff;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  margin-bottom: 1.5rem !important;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  #hamburguer {
    display: none;
  }

  @media screen and (max-width: 767px) {
    justify-content: space-between;

    #hamburguer {
      margin-left: 1rem;
      display: block;
      width: 40px;
      height: 40px;
    }
  }

  .user {
    display: flex;

    .user-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      span {
        color: #5a5c69;
        font-size: 0.8rem;
        margin-right: 5px;
      }

      span + span {
        color: #818394;
        font-size: 0.6rem;
      }
    }
  }
`;

export const BodyBurguer = styled.div`
  .menu {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 14px;
      color: #4e73df;
    }
  }

  .menu:hover {
    background-color: #eaecf4;
    transition: 0.5s ease-in-out;

    svg {
      color: #224abe;
      transition: 0.5s ease-in-out;
    }
  }

  input {
    display: none;
  }
`;

export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;
