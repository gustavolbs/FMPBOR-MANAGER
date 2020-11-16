import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faCoins,
  faUsers,
  faGlobe,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      oloko: null,
    };
  }

  logout = () => {
    localStorage.removeItem('fmpborToken');
  };

  render() {
    return (
      <Container id="sidebar">
        <div id="title">FMPBOR Manager</div>
        <hr />

        {/* HOME */}
        <li>
          <Link to="/dashboard/">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span>Dashboard</span>
          </Link>
        </li>

        <hr />

        {/* FINANCEIRO */}
        <li>
          <Link to="/financial/">
            <FontAwesomeIcon icon={faCoins} />
            <span>Financeiro</span>
          </Link>
        </li>

        <hr />

        {/* SOCIEDADES */}
        <li>
          <Link to="/society/">
            <FontAwesomeIcon icon={faUsers} />
            <span>Sociedade</span>
          </Link>
        </li>

        <hr />

        {/* FEDERAÇÃO */}
        <li>
          <Link to="/federation/">
            <FontAwesomeIcon icon={faGlobe} />
            <span>Federação</span>
          </Link>
        </li>

        <hr />

        {/* Profile */}
        <li>
          <Link to="/profile/">
            <FontAwesomeIcon icon={faUser} />
            <span>Perfil</span>
          </Link>
        </li>

        <hr />
        <li>
          <Link onClick={this.logout} to="/">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Sair</span>
          </Link>
        </li>
      </Container>
    );
  }
}
