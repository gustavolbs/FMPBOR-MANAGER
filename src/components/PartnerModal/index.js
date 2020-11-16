import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InputMask from 'react-input-mask';
import api from '../../services/Api';
import Notificate from '../../utils/Notification';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '80vw',
    maxWidth: 600,
    backgroundColor: '#fff',
    color: '#5a5c69',
    boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important',
    borderRadius: '0.35rem',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [cargo, setCargo] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idSocio, setIdSocio] = useState(null);

  const handleOpen = () => {
    if (props.infos) {
      setCargo(props.infos.cargo);
      setNome(props.infos.nome);
      setTelefone(props.infos.telefone);
      setEmail(props.infos.email);
      setIdSocio(props.infos.idSocio);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async e => {
    e.preventDefault();

    try {
      let response;
      if (idSocio === null) {
        if (
          nome.length > 0 &&
          (cargo !== null && cargo !== '---') &&
          telefone.length > 0
        ) {
          response = await api.post(`/usuario/cadastrar_socio`, {
            id_cargo: cargo,
            nome,
            telefone,
            email,
            token: localStorage.getItem('fmpborToken'),
          });
          if (response.data.resposta != 'Gravado com sucesso') {
            Notificate(
              'Ocorreu um erro: Você não possui permissão ou já existe um sócio neste cargo',
              'error'
            );
          } else {
            Notificate('Operação realizada com sucesso', 'success');
          }
        } else {
          Notificate('Todos os campos devem ser preenchidos', 'error');
        }
      } else {
        response = await api.post(`/usuario/alterar_socio`, {
          id_cargo: cargo,
          nome,
          telefone,
          email,
          id_socio: idSocio,
          token: localStorage.getItem('fmpborToken'),
        });
        if (response.data.resposta != 'Alterado com sucesso') {
          Notificate(
            'Ocorreu um erro: Você não possui permissão ou já existe um sócio neste cargo',
            'error'
          );
        } else {
          Notificate('Operação realizada com sucesso', 'success');
        }
      }

      console.log(response.data);
      if (
        response.data.resposta === 'Gravado com sucesso' ||
        response.data.resposta === 'Alterado com sucesso'
      ) {
        handleClose();
        setTimeout(function() {
          window.location.reload();
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button id="addPartner" onClick={handleOpen}>
        {props.buttonName === (null || undefined)
          ? 'Cadastrar novo sócio'
          : props.buttonName}
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} id="modalBody" className={classes.paper}>
          <h2 id="simple-modal-title">Adicionar novo Sócio</h2>
          <label>
            <span>
              Nome do Sócio<upper>*</upper>
            </span>
            <input
              type="text"
              name="nome"
              value={nome}
              placeholder="ex: Thiago Ribeiro"
              required
              onChange={e => setNome(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Telefone do Sócio<upper>*</upper>
            </span>
            <InputMask
              mask="(99) 99999-9999"
              onChange={e => setTelefone(`${e.target.value}`)}
              name="telefone"
              value={telefone}
              maskPlaceholder="(00) 00000-0000"
            />
          </label>

          <label>
            <span>
              Email do Sócio
              {/* <upper>*</upper> */}
            </span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="ex: thiagoribeiro@email.com"
              required
              onChange={e => setEmail(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Cargo/Status<upper>*</upper>
            </span>
            <select
              name="cargo"
              value={cargo}
              onChange={e => setCargo(`${e.target.value}`)}
            >
              <option value="---">---</option>
              <option value="1">Presidente</option>
              <option value="2">Vice-presidente</option>
              <option value="3">Secretário Executivo</option>
              <option value="4">1° Secretário</option>
              <option value="5">2° Secretário</option>
              <option value="6">Tesoureiro</option>
              <option value="7">Conselheiro</option>
              <option value="8">Sócio Ativo</option>
              <option value="9">Sócio Colaborador/Cooperador</option>
              <option value="10">Sócio Inativo</option>
            </select>
          </label>

          <div id="buttonContainer">
            <button type="button" id="cancelButton" onClick={handleClose}>
              Cancelar
            </button>
            <button type="submit" id="addButton" onClick={handleAdd}>
              Adicionar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
