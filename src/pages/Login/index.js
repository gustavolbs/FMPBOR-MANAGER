/**
 * Login Page
 *
 * Additional librarys:
 *  - React Router Dom
 *  - @material-ui/icons
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../services/Api';

import Error from '../../components/Error';

import { Container, FormContainer } from './styles';

// import { ReactComponent as Logo } from '../../assets/logo.svg';
import Notificate from '../../utils/Notification';

/**
 * Login Component
 * A component that displays the Login page to user.
 */
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      err: null,
      isLogged: localStorage.getItem('fmpborToken') !== null,
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ err: false });

    try {
      const { user, password } = this.state;

      // Verify API
      const response = await api.post('/usuario/login/', {
        user,
        password,
      });

      console.log(response);

      if (response.data.token) {
        Notificate('Usuário logado com sucesso', 'success');
        localStorage.setItem('fmpborToken', response.data.token);
        localStorage.setItem('fmpborLogin', JSON.stringify(response.data));
      } else {
        Notificate('Erro no login', 'error');
      }
      if (response.data.error) {
        Notificate('Erro no login', 'error');
      }
      this.setState({ isLogged: true });
    } catch (error) {
      Notificate('Erro no login', 'error');
      console.log(error);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.isLogged) {
      return <Redirect to={{ pathname: '/dashboard/' }} />;
    }

    const { user, password, err } = this.state;

    return (
      <Container>
        <div className="card">
          <h1>FMPBOR Manager</h1>
          <Form
            onSubmit={this.handleSubmit}
            user={user}
            password={password}
            err={err}
            onChange={this.onChange}
          />
        </div>
      </Container>
    );
  }
}

/**
 * Form functional Component
 * A component that displays the form on screen.
 *
 * @param {Function} onSubmit
 * @param {String} user
 * @param {String} password
 * @param {String} err
 * @param {Function} onChange
 */
function Form({ onSubmit, user, password, err, onChange }) {
  return (
    <FormContainer>
      <div>
        <label htmlFor="user">
          <input
            type="text"
            name="user"
            value={user}
            onChange={onChange}
            required
            placeholder="Entre com seu usuário..."
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            min="8"
            max="15"
            placeholder="Senha"
          />
        </label>
      </div>
      <button type="submit" onClick={onSubmit}>
        Fazer login
      </button>
      {err && <Error err={err} />}
    </FormContainer>
  );
}
