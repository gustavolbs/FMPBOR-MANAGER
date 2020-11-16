import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faHome,
  faUsers,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import api from '../../services/Api';

import { Container, Content, DashboardContainer } from './styles';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      sums: {
        soma_entradas: '',
        soma_saídas: '',
        saldo: '',
      },
    };
  }

  async componentDidMount() {
    this.reloadData();
  }

  async reloadData() {
    const response = await api.post('/financeiro/soma_movimentacoes', {
      token: localStorage.getItem('fmpborToken'),
      ano: new Date().getFullYear(),
    });

    this.setState({ sums: response.data });
  }

  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Navbar />
          <DashboardContent sums={this.state.sums} />
        </Content>
      </Container>
    );
  }
}

function DashboardContent({ sums }) {
  return (
    <DashboardContainer>
      <header>
        <h1>Dashboard</h1>
      </header>
      <div className="card-list">
        <div id="card-1" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Entradas</div>
              <div className="card-value">
                R$ {sums.soma_entradas ? sums.soma_entradas : 0}
              </div>
            </div>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
        </div>

        <div id="card-2" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Saídas</div>
              <div className="card-value">
                R$ {sums.soma_saídas ? sums.soma_saídas : 0}
              </div>
            </div>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
        </div>

        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Saldo</div>
              <div className="card-value">R$ {sums.saldo ? sums.saldo : 0}</div>
            </div>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
        </div>

        <div id="card-3" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Sociedades</div>
              <div className="card-value">XXX</div>
            </div>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>

        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Sócios</div>
              <div className="card-value">XXX.XXX</div>
            </div>
            <FontAwesomeIcon icon={faUsers} />
          </div>
        </div>
      </div>
      <header>
        <h1>Avisos</h1>
      </header>
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
            <FontAwesomeIcon icon={faCalendar} />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
}
