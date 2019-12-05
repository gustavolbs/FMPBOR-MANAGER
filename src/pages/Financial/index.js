import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import FinancialModal from '../../components/FinancialModal';
import FinancialModalRemove from '../../components/FinancialModalRemove';
import api from '../../services/Api';
import GeneratePDF from '../../utils/PDFGenerator';

import {
  Container,
  Content,
  FinancialContainer,
  FinancesTable,
} from './styles';

export default class Financial extends Component {
  constructor() {
    super();
    this.state = {
      financials: [],
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
    const response = await api.post('/financeiro/listar_movimentacoes', {
      token: localStorage.getItem('fmpborToken'),
      ano: new Date().getFullYear(),
    });

    this.setState({ financials: response.data });

    const response2 = await api.post('/financeiro/soma_movimentacoes', {
      token: localStorage.getItem('fmpborToken'),
      ano: new Date().getFullYear(),
    });

    this.setState({ sums: response2.data });
  }

  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Navbar />
          <FinancialContent
            financials={this.state.financials}
            sums={this.state.sums}
          />
        </Content>
      </Container>
    );
  }
}

function FinancialContent({ financials, sums }) {
  return (
    <FinancialContainer>
      <header>
        <h1>Financeiro</h1>
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

        <div id="card-3" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Saldo</div>
              <div className="card-value">R$ {sums.saldo ? sums.saldo : 0}</div>
            </div>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
        </div>
      </div>
      <FinancialModal />
      <TableFinances financials={financials} />
    </FinancialContainer>
  );
}

function TableFinances({ financials }) {
  return (
    <FinancesTable>
      <header id="tableHeader">
        <span>Finanças</span>
        <button type="button" id="addFinances" onClick={GeneratePDF}>
          Gerar Relatório
        </button>
      </header>
      <div className="bodyTable">
        {/* <div className="inputTable">FILTRAGEM</div> */}
        <div className="divTable">
          <table id="financialTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Última Modificação</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {financials.map(item => (
                <tr>
                  <th>{item.id_movimentação}</th>
                  <th>{item.titulo}</th>
                  <th>{item.descrição}</th>
                  <th>{item.data}</th>
                  <th>{item.data_alteração}</th>
                  <th className={item.valor >= 0 ? 'inFinance' : 'outFinance'}>
                    {item.valor}
                  </th>
                  <th className={item.valor >= 0 ? 'inFinance' : 'outFinance'}>
                    {item.valor >= 0 ? 'Entrada' : 'Saída'}
                  </th>
                  <th>
                    <FinancialModal
                      infos={{
                        id_movimentação: item.id_movimentação,
                        titulo: item.titulo,
                        descrição: item.descrição,
                        data: item.data,
                        valor: item.valor,
                      }}
                      buttonName={<FontAwesomeIcon icon={faPencilAlt} />}
                    />
                  </th>
                  <th>
                    <FinancialModalRemove idFinancial={item.id_movimentação} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FinancesTable>
  );
}
