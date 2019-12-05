/**
 * Main Page
 *
 * Additional librarys:
 *  - React Router Dom
 */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

/**
 * Main Component
 * A component that displays the Main page to user.
 */
export default class Main extends Component {
  render() {
    return (
      <>
        <h1>Aqui vai ser o site</h1>
        <Link to="/login/">Login</Link>
      </>
    );
  }
}
