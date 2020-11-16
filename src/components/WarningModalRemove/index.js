import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import api from '../../services/Api';

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

  const handleOpen = () => {
    setOpen(true);
    console.log(props);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async e => {
    e.preventDefault();

    try {
      await api.post(`/financeiro/deletar_movimentacao`, {
        token: localStorage.getItem('fmpborToken'),
        id_movimentação: props.idFinancial,
      });
      handleClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button id="removeFinances" onClick={handleOpen}>
        x
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} id="modalBody" className={classes.paper}>
          <h2 id="simple-modal-title">Remover Transação</h2>
          <span className="removeConfirmation">
            Deseja remover esta transação? (Esta ação não pode ser desfeita)
          </span>
          <div id="buttonContainer">
            <button type="button" id="cancelButton" onClick={handleClose}>
              Cancelar
            </button>
            <button type="submit" id="removeButton" onClick={handleAdd}>
              Remover
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
