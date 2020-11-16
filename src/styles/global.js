/**
 * Global CSS configuration file
 */
import { createGlobalStyle } from 'styled-components';
// import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
    background: #f8f9fc;
  }

  body {
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  .modal {
    #modalBody {
      display: flex;
      flex-direction: column;
      flex: 1;

      #simple-modal-title {
        font-weight: 400 !important;
        margin-bottom: 1.5rem;
      }

      label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 1rem;


        span {
          margin-bottom: .35rem;

          upper {
            color: #e74a3b;
          }
        }

        input, textarea, select, option {
          width: 100%;
          padding: 10px;
          border-radius: .35rem;
          border: 1px solid #d1d3e2;
        }

        input:focus , textarea:focus, select:focus, option:focus {
          font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
          color: #6e707e;
          background-color: #fff;
          border-color: #bac8f3;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        input::placeholder, textarea::placeholder, select::placeholder, option::placeholder {
          font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
          color: #6e707e;
        }
      }

      .removeConfirmation {
        margin-bottom: 1.5rem;
      }

      #buttonContainer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex: 1;

        button {
          font-size: 0.8rem;
          border-radius: 10rem;
          padding: 0.75rem 1rem;
          color: #fff;
          background-color: #4e73df;
          border: 1px solid #4e73df;
          display: block;
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

        #cancelButton {
          background: #e74a3b;
          border: 1px solid #e74a3b;
        }

        #cancelButton:hover {
          background-color: #C73035;
          border-color: #BF2A30;
          transition: border-color 0.15s ease-in-out,
            background-color 0.15s ease-in-out;
        }

        #cancelButton:focus {
          border-color: #de7368;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(231, 74, 59, 0.25);
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        #removeButton {
          background: #1cc88a;
          border: 1px solid #1cc88a;
        }

        #removeButton:hover {
          background-color: #138a5f;
          border-color: #0a7850;
          transition: border-color 0.15s ease-in-out,
            background-color 0.15s ease-in-out;
        }

        #removeButton:focus {
          border-color: #43d9a2;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(28, 200, 138, 0.25);
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
      }

    }
  }
`;
