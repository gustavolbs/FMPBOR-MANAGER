import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
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

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [idFinancial, setIdFinancial] = useState(null);

  const handleOpen = () => {
    if (props.infos) {
      setTitle(props.infos.titulo);
      setValue(props.infos.valor);
      setDescription(props.infos.descrição);
      setDate(props.infos.data);
      setIdFinancial(props.infos.id_movimentação);
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
      if (idFinancial === null) {
        if (
          title.length > 0 &&
          value !== null &&
          description.length > 0 &&
          date !== null
        ) {
          response = await api.post(`/financeiro/gravar_movimentacao`, {
            titulo: title,
            valor: parseFloat(value),
            descrição: description,
            data: date,
            token: localStorage.getItem('fmpborToken'),
          });
          Notificate('Operação realizada com sucesso', 'success');
        } else {
          Notificate('Todos os campos devem ser preenchidos', 'error');
        }
      } else {
        response = await api.post(`/financeiro/alterar_movimentacao`, {
          titulo: title,
          valor: parseFloat(value),
          descrição: description,
          data: date,
          id_movimentação: idFinancial,
          token: localStorage.getItem('fmpborToken'),
        });
        Notificate('Operação realizada com sucesso', 'success');
      }

      handleClose();
      console.log(response.data);
      setTimeout(function() {
        window.location.reload();
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button id="addFinances" onClick={handleOpen}>
        {props.buttonName === (null || undefined)
          ? 'Criar nova transação'
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
          <h2 id="simple-modal-title">Adicionar nova Transação</h2>
          <label>
            <span>
              Título da Transação<upper>*</upper>
            </span>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="ex: Gastos Acampamento 2019"
              required
              onChange={e => setTitle(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Descrição da Transação<upper>*</upper>
            </span>
            <textarea
              type="text"
              name="description"
              rows="5"
              value={description}
              placeholder="ex: Foram gastos R$ 100 com material de limpeza"
              required
              onChange={e => setDescription(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Data da Transação<upper>*</upper>
            </span>
            <input
              type="date"
              name="date"
              value={date}
              placeholder="ex: 12/12/2018"
              required
              onChange={e => setDate(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Valor<upper>*</upper>
            </span>
            <input
              type="number"
              name="value"
              value={value}
              placeholder="ex: 100 ou -100"
              required
              onChange={e => setValue(`${e.target.value}`)}
            />
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
