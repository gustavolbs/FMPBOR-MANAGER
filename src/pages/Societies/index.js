import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import PartnerModal from '../../components/PartnerModal';
import PartnerModalRemove from '../../components/PartnerModalRemove';
import api from '../../services/Api';
import GeneratePDF from '../../utils/PDFGenerator';

import { Container, Content, SocietyContainer, PartnersTable } from './styles';

export default class Society extends Component {
  constructor() {
    super();
    this.state = {
      partners: [],
      sums: {},
    };
  }

  async componentDidMount() {
    this.reloadData();
  }

  async reloadData() {
    const response = await api.post('/usuario/listar_socios', {
      token: localStorage.getItem('fmpborToken'),
    });
    this.setState({ partners: response.data });
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
          <SocietyContent
            partners={this.state.partners}
            sums={this.state.sums}
          />
        </Content>
      </Container>
    );
  }
}

function SocietyContent({ partners, sums }) {
  return (
    <SocietyContainer>
      <header>
        <h1>Sociedade</h1>
      </header>
      <div className="card-list">
        <div id="card-4" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Sócios</div>
              <div className="card-value">
                {/* R$ {sums.soma_entradas ? sums.soma_entradas : 0} */}
              </div>
            </div>
            <FontAwesomeIcon icon={faUsers} />
          </div>
        </div>

        <div id="card-1" className="card">
          <div className="card-content">
            <div className="header-card">
              <div className="card-title">Ativos</div>
              <div className="card-value">
                {/* R$ {sums.soma_saídas ? sums.soma_saídas : 0} */}
              </div>
            </div>
            <FontAwesomeIcon icon={faUsers} />
          </div>
        </div>
      </div>
      {JSON.parse(localStorage.getItem('fmpborLogin')).cargo ===
        'Presidente' && <PartnerModal />}
      <TablePartners partners={partners} />
    </SocietyContainer>
  );
}

function TablePartners({ partners }) {
  return (
    <PartnersTable>
      <header id="tableHeader">
        <span>Sócios</span>
      </header>
      <div className="bodyTable">
        {/* <div className="inputTable">FILTRAGEM</div> */}
        <div className="divTable">
          <table id="partnersTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Status</th>
                <th>Telefone</th>
                <th>Email</th>
                {JSON.parse(localStorage.getItem('fmpborLogin')).cargo ===
                  'Presidente' && (
                  <>
                    <th>Editar</th>
                    {/* <th>Remover</th> */}
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {partners.map(item => (
                <tr>
                  <th>{item.id_socio}</th>
                  <th>{item.nome}</th>
                  <th
                    className={
                      item.cargo == 'Sócio Inativo' ? 'outFinance' : ''
                    }
                  >
                    {item.cargo}
                  </th>
                  <th>{item.telefone}</th>
                  <th>{item.email}</th>
                  {JSON.parse(localStorage.getItem('fmpborLogin')).cargo ===
                    'Presidente' && (
                    <>
                      <th>
                        <PartnerModal
                          infos={{
                            idSocio: item.id_socio,
                            nome: item.nome,
                            cargo: item.cargo,
                            telefone: item.telefone,
                            email: item.email,
                          }}
                          buttonName={<FontAwesomeIcon icon={faPencilAlt} />}
                        />
                      </th>
                      {/* <th>
                        <PartnerModalRemove id_socio={item.id_socio} />
                      </th> */}
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PartnersTable>
  );
}
