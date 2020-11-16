/**
 * App
 * File that defines what APP will be
 *
 * Additional librarys:
 *  - React Toastify
 */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        draggablePercent={60}
      />
      <Routes />
      <GlobalStyle />
    </>
  );
}
