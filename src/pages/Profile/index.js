import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

import { Container, Content, ProfileContainer } from './styles';
import api from '../../services/Api';
import Notificate from '../../utils/Notification';
// import fmpborImage from '../../assets/fmpbor.jpg'

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      newPassword: '',
      newPassword_verify: '',
    };
  }

  componentDidMount() {}

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { newPassword, newPassword_verify } = this.state;

      console.log('tá aqui');

      if (newPassword !== newPassword_verify) {
        Notificate('As senhas digitadas não batem', 'error');
      } else if (newPassword.length < 8 || newPassword_verify.length < 8) {
        Notificate('Sua nova senha deve ter pelo menos 8 caracteres', 'error');
      } else {
        const response = await api.post('/usuario/alterar_senha', {
          token: localStorage.getItem('fmpborToken'),
          senha: newPassword,
        });

        console.log(response);
        if (response.data.resposta) {
          Notificate('Senha alterada com sucesso', 'success');
        } else {
          Notificate('Ocorreu um erro ao alterar sua senha', 'error');
        }
      }
    } catch (error) {
      Notificate('Ocorreu um erro ao alterar sua senha', 'error');
      console.log(error);
    }
  };

  onChange = e => {
    console.log('teste');
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Navbar />
          <ProfileContent
            handleSubmit={this.handleSubmit}
            newPassword={this.state.newPassword}
            newPassword_verify={this.state.newPassword_verify}
            onChange={this.onChange}
          />
        </Content>
      </Container>
    );
  }
}

function ProfileContent({
  handleSubmit,
  newPassword,
  newPassword_verify,
  onChange,
}) {
  return (
    <ProfileContainer>
      <h1>Perfil</h1>
      <div id="changePassword">
        <h2>Alterar Senha</h2>
        <label htmlFor="newPassword">
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={onChange}
            required
            placeholder="Digite sua nova senha"
          />
        </label>
        <label htmlFor="newPassword_verify">
          <input
            type="password"
            name="newPassword_verify"
            value={newPassword_verify}
            onChange={onChange}
            required
            placeholder="Repita sua nova senha"
          />
        </label>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Alterar Senha
      </button>
    </ProfileContainer>
  );
}
