import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import user from '../../assets/placeholder-user.png';

import { Container, BodyBurguer, AvatarContainer } from './styles';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      igreja: '',
      cargo: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('fmpborLogin')) {
      try {
        const data = JSON.parse(localStorage.getItem('fmpborLogin'));
        this.setState({
          nome: data.nome,
          igreja: data.igreja,
          cargo: data.cargo,
        });
      } catch (err) {}
    }
  }

  render() {
    return (
      <Container>
        <HamburguerButton />
        <div className="user">
          <div className="user-title">
            <span>{this.state.nome}</span>
            <span>
              {this.state.cargo} - {this.state.igreja}
            </span>
          </div>
          <Avatar />
        </div>
      </Container>
    );
  }
}

function HamburguerButton() {
  function buttonMenu() {
    if (document.getElementById('menu-hamburguer').checked === true) {
      document.getElementById('sidebar').style.display = 'none';
    } else {
      document.getElementById('sidebar').style.display = 'flex';
    }
  }

  return (
    <BodyBurguer id="hamburguer" onClick={buttonMenu}>
      <input id="menu-hamburguer" type="checkbox" />

      <label htmlFor="menu-hamburguer">
        <div className="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </label>
    </BodyBurguer>
  );
}

function Avatar() {
  return (
    <AvatarContainer>
      <img src={user} />
    </AvatarContainer>
  );
}
