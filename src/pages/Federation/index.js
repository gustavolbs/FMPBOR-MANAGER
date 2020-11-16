import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import api from '../../services/Api';
import WarningModal from '../../components/WarningModal';
import WarningModalRemove from '../../components/WarningModalRemove';

import { Container, Content, FederationContainer } from './styles';

export default class Federation extends Component {
  constructor() {
    super();
    this.state = {
      warnings: [],
      sums: {},
    };
  }

  async componentDidMount() {
    this.reloadData();
  }

  async reloadData() {
    // const response = await api.post('/financeiro/listar_movimentacoes', {
    //   token: localStorage.getItem('fmpborToken'),
    //   ano: new Date().getFullYear(),
    // });
    // this.setState({ warnings: response.data });
    // const response2 = await api.post('/financeiro/soma_movimentacoes', {
    //   token: localStorage.getItem('fmpborToken'),
    //   ano: new Date().getFullYear(),
    // });
    // this.setState({ sums: response2.data });
  }

  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Navbar />
          <FederationContent
            warnings={this.state.warnings}
            sums={this.state.sums}
          />
        </Content>
      </Container>
    );
  }
}

function FederationContent({ warnings, sums }) {
  return (
    <FederationContainer>
      <header>
        <h1>Federação</h1>
      </header>

      <header>
        <h1>Avisos</h1>
      </header>
      {/* <WarningModal /> */}
      <div className="card-list">
        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">financeiro</div>
              <div className="card-value">
                Você tem até o dia 22/11 para gerar seu relatório para o
                congresso em 23/11
              </div>
            </div>
            {/* <WarningModalRemove /> */}
            <FontAwesomeIcon icon={faCalendar} />
          </div>
        </div>
      </div>
      {JSON.parse(localStorage.getItem('fmpborLogin')).cargo === 'Presidente'}
    </FederationContainer>
  );
}
