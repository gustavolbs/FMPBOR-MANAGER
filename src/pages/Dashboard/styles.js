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

export const DashboardContainer = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  h1 {
    color: #5a5c69 !important;
    font-size: 1.75rem;
    font-weight: 40;
    margin-bottom: 1.5rem;
  }

  .card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .card {
      background: #fff;
      margin-bottom: 24px;
      height: auto;
      padding-bottom: 0.5rem;
      margin-left: 12px;
      margin-right: 12px;
      padding-top: 0.5rem;
      box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      min-width: 273px;
      word-wrap: break-word;
      background-clip: border-box;
      border: 1px solid #e3e6f0;
      border-radius: 0.35rem;

      .card-content {
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .header-card {
          .card-title {
            font-size: 0.7rem;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            margin-bottom: 0.25rem !important;
          }

          .card-value {
            color: #5a5c69 !important;
            font-weight: 700 !important;
            margin-bottom: 0 !important;
            font-size: 1.25rem;
          }
        }

        svg {
          font-size: 2em;
          width: 40px;
          color: #dddfeb !important;
        }
      }
    }

    #card-1 {
      border-left: 0.25rem solid #1cc88a !important;
      /* margin-left: 0; */

      .card-title {
        color: #1cc88a !important;
      }
    }

    #card-2 {
      border-left: 0.25rem solid #e74a3b !important;

      .card-title {
        color: #e74a3b !important;
      }
    }

    #card-3 {
      border-left: 0.25rem solid #36b9cc !important;

      .card-title {
        color: #36b9cc !important;
      }
    }

    #card-4 {
      border-left: 0.25rem solid #f6c23e !important;
      /* margin-right: 0; */

      .card-title {
        color: #f6c23e !important;
      }
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1405px) {
    #card-3 {
      /* margin-right: 0; */
    }

    #card-4 {
      /* margin-left: 0; */
    }
  }

  @media screen and (min-width: 1188px) and (max-width: 1279px) {
    #card-3 {
      /* margin-right: 0; */
    }

    #card-4 {
      /* margin-left: 0; */
    }
  }

  @media screen and (min-width: 1114px) and (max-width: 1187px) {
    #card-3 {
      /* margin-right: 0; */
    }

    #card-4 {
      /* margin-left: 0; */
    }
  }

  @media screen and (min-width: 806px) and (max-width: 1088px) {
    #card-2 {
      /* margin-right: 0; */
    }

    #card-3 {
      /* margin-left: 0; */
    }
  }

  @media screen and (max-width: 805px) {
    .card-list {
      .card {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`;
